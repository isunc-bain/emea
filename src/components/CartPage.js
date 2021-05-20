import React, { useEffect, useState } from 'react';
import { config } from '../../server/routes/api/config';
import { LOCAL_STORAGE_ITEM_KEY } from './constants';
import CartItems from './CartItems';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

const CartPage = () => {
  const [cartStorage, setCartStorage] = useState(
    localStorage.getItem(LOCAL_STORAGE_ITEM_KEY) || ''
  );
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function fetchCartItems() {
      if (cartStorage == null || cartStorage === '') {
        setItems([]);
        return;
      }
      const books = cartStorage
        .split(',')
        .map(bookId =>
          fetch(`${config.API_URL}/api/books/${bookId}`).then(res => res.json())
        );
      setItems(await Promise.all(books));
    }

    fetchCartItems();
  }, [cartStorage]);

  const clearCart = () => {
    localStorage.clear();
    setItems([]);
    handleClose();
  };

  const onRemoveItemFromCart = itemId => {
    if (itemId) {
      let cartItems = localStorage.getItem(LOCAL_STORAGE_ITEM_KEY) || '';
      cartItems = cartItems.split(',');
      const cartItemIndexToRemove = cartItems.findIndex(
        item => item === itemId.toString()
      );
      cartItems.splice(cartItemIndexToRemove, 1);
      cartItems = cartItems.join(',');
      localStorage.setItem(LOCAL_STORAGE_ITEM_KEY, cartItems);
      setCartStorage(cartItems);
    }
  };

  return (
    <>
      <CartItems items={items} onRemoveItemFromCart={onRemoveItemFromCart} />
      {items.length > 0 && (
        <Button variant="contained" onClick={handleClickOpen}>
          Clear Cart
        </Button>
      )}
      {items.length === 0 && (
        <Typography gutterBottom variant="h6" component="h2">
          Empty Cart
        </Typography>
      )}
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to clear your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={clearCart} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartPage;
