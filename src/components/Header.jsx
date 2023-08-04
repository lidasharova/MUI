import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from 'react';

function Header({ handleCard, orderLen }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="overline"
          component="span"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          MUI Shop
        </Typography>
        <IconButton color="inherit" onClick={handleCard}>
          <Badge color="secondary" badgeContent={orderLen}>
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
