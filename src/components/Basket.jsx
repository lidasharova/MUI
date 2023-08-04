import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import BasketItem from './BasketItem';

export const Basket = (props) => {
  const {
    cardOpen,
    order = [],
    removeFromOrder,
    closeCard = Function.prototype,
  } = props;

  return (
    <Drawer anchor="right" open={cardOpen} onClose={closeCard}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasketIcon></ShoppingBasketIcon>
          </ListItemIcon>
          <ListItemText primary="Корзина"></ListItemText>
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Корзина пуста!</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem
                key={item.name}
                removeFromOrder={removeFromOrder}
                {...item}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};
