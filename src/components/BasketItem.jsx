import { IconButton, ListItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BasketItem = ({ removeFromOrder, name, id, price, quantity }) => {
  return (
    <ListItem>
      <Typography
      variant='body1'>
        {name} {price}руб x{quantity}
      </Typography>
      <IconButton
        className="btn btn-primary"
        onClick={() => removeFromOrder(id)}
      >
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
