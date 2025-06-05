import React, { useContext, useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { LayoutGrid } from 'lucide-react';
import { ResumeInfoContext } from './ResumeInfoContext';
import GlobalApi from './GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import './ThemeColor.css';  // Import your CSS file

function ThemeColor() {
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
    "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
    "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"
  ];

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [selectedColor, setSelectedColor] = useState(resumeInfo?.themeColor || '');
  const { resumeId } = useParams();

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setSelectedColor(resumeInfo?.themeColor || '');
  }, [resumeInfo?.themeColor]);

  const onColorSelect = (color) => {
    setSelectedColor(color);
    setResumeInfo({
      ...resumeInfo,
      themeColor: color
    });
    const data = {
      data: {
        themeColor: color
      }
    };
    GlobalApi.UpdateResumeDetail(resumeId, data)
      .then(() => {
        toast('Theme Color Updated');
      })
      .catch(err => {
        toast.error('Failed to update theme color');
        console.error(err);
      });
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'theme-popover' : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        variant="outlined"
        size="small"
        onClick={handleClick}
        startIcon={<LayoutGrid />}
        className="theme-button"
      >
        Theme
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="popover-content">
          <h2 className="popover-title">Select Theme Color</h2>
          <div className="color-grid">
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => onColorSelect(color)}
                className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onColorSelect(color);
                }}
                aria-label={`Select theme color ${color}`}
              />
            ))}
          </div>
        </div>
      </Popover>
    </>
  );
}

export default ThemeColor;
