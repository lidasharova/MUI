import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Link,
  Button,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from 'react';

const navItems = [
  { text: 'Catalog', link: '/catalog' },
  { text: 'About Us', link: '/about' },
  { text: 'Main page', link: '/' },
  { text: 'Login', link: '/login' },
  { text: 'Registration', link: '/registration' },
  { text: 'Profile', link: '/profile' },
];

function Header({ handleCart, orderLen }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          component="span"
          sx={{ flexGrow: 2, fontWeight: 700 }}
        >
          PetJoy
        </Typography>

        <div sx={{ display: 'flex', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.link}
              sx={{ color: 'inherit', marginX: 2 }}
            >
              {item.text}
            </Button>
          ))}
        </div>

        <IconButton color="inherit" onClick={handleCart}>
          <Badge color="secondary" badgeContent={orderLen}>
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
