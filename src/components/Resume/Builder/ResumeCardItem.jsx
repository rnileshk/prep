import { Loader2Icon, MoreVertical } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import GlobalApi from './GlobalApi';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import './ResumeCardItem.css'; // 👈 Import CSS

function ResumeCardItem({ resume, refreshData }) {
  const navigate = useNavigate();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(
      (resp) => {
        toast('Resume Deleted!');
        refreshData();
        setLoading(false);
        setOpenDialog(false);
      },
      () => setLoading(false)
    );
  };

  return (
    <Card className="resume-card">
      <Link to={`/dashboard/resume/${resume.documentId}/edit`} className="resume-link">
        <div
          className="resume-card-header"
          style={{
            borderTop: `4px solid ${resume?.themeColor}`,
          }}
        >
          <img src="/cv.png" alt="Resume" width={80} height={80} />
        </div>
      </Link>

      <CardContent
        className="resume-card-content"
        style={{
          backgroundColor: resume?.themeColor || '#e0e0e0',
        }}
      >
        <Typography variant="subtitle2" className="resume-title">
          {resume.title}
        </Typography>

        <IconButton onClick={handleMenuClick}>
          <MoreVertical size={18} />
        </IconButton>

        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => { navigate(`/dashboard/resume/${resume.documentId}/edit`); handleMenuClose(); }}>
            Edit
          </MenuItem>
          <MenuItem onClick={() => { navigate(`/my-resume/${resume.documentId}/view`); handleMenuClose(); }}>
            View
          </MenuItem>
          <MenuItem onClick={() => { navigate(`/my-resume/${resume.documentId}/view`); handleMenuClose(); }}>
            Download
          </MenuItem>
          <MenuItem onClick={() => { setOpenDialog(true); handleMenuClose(); }}>
            Delete
          </MenuItem>
        </Menu>
      </CardContent>

      {/* Delete Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action cannot be undone. It will permanently delete your resume and remove it from our servers.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={onDelete} color="error" disabled={loading} variant="contained">
            {loading ? <Loader2Icon className="spin" /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

ResumeCardItem.propTypes = {
  resume: PropTypes.shape({
    documentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    themeColor: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  refreshData: PropTypes.func.isRequired,
};

export default ResumeCardItem;
