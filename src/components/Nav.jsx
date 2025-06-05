import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { MenuData } from './MenuData';

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from '@clerk/clerk-react';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" style={{ backgroundColor: "#005b96", height: "10vh" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Times New Roman',
              fontWeight: 700,
              color: 'inherit',
              marginRight: "34rem",
              textDecoration: 'none',
            }}
          >
            <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {MenuData.map((item, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={item.url} className={item.cName} style={{ color: "#222" }}>
                      <i className={item.icon}></i> {item.title}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* App Title on Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Times New Roman',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Interview Preparation
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {MenuData.map((item, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#fff', display: 'block' }}
              >
                <a href={item.url} className={item.cName} style={{ color: "#fff", marginLeft: "2rem", fontSize: "16px", fontWeight: "bold", fontFamily: "Times New Roman" }}>
                  <i className={item.icon}></i> {item.title}
                </a>
              </Button>
            ))}
          </Box>

          {/* Right Side: Auth Buttons */}
          <Box sx={{ flexGrow: 0 }}>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  sx={{
                    color: '#fff',
                    border: '1px solid white',
                    fontFamily: 'Times New Roman',
                    borderRadius: 2,
                    mx: 1
                  }}
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
