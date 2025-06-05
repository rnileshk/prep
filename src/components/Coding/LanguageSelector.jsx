import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Typography from '@mui/material/Typography';
import { LANGUAGE_VERSIONS } from "./constants"; // Adjust path if necessary

// Alphabetically sort for better UX
const languages = Object.entries(LANGUAGE_VERSIONS).sort((a, b) =>
  a[0].localeCompare(b[0])
);

const ACTIVE_COLOR = "#3182ce"; // blue.400 equivalent in Chakra, you can change as needed

const LanguageSelector = ({ language, onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (lang) => {
    onSelect(lang);
    handleClose();
  };

  return (
    <Box ml={2} mb={2} display={"flex"} flexDirection="row" alignItems="flex-start" gap={"10rem"}>
      <Typography mb={1} variant="subtitle1" fontWeight="medium">
        Language:
      </Typography>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        {language}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#333",
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: 1,
          },
        }}
      >
        {languages.map(([lang, version]) => (
          <MenuItem
            key={lang}
            selected={lang === language}
            onClick={() => handleSelect(lang)}
            sx={{
              backgroundColor: lang === language ? "#333" : "#222",
              color: lang === language ? ACTIVE_COLOR : "white",
              display: "flex",
              justifyContent: "space-between",
              "&:hover": {
                backgroundColor: "#222",
                color: ACTIVE_COLOR,
              },
            }}
          >
            <Typography>{lang}</Typography>
            <Typography variant="body2" color="gray">
              {version}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
