import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import { config } from '../../server/routes/api/config';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { LOCAL_STORAGE_ITEM_KEY } from './constants';
import Snackbar from '@material-ui/core/Snackbar';

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    function fetchBook(bookId) {
      fetch(`${config.API_URL}/api/books/${bookId}`)
        .then(res => res.json())
        .then(bookObj => setBook(bookObj));
    }

    fetchBook(bookId);
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
  });

  const classes = useStyles();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const addToCart = () => {
    let cartItems = localStorage.getItem(LOCAL_STORAGE_ITEM_KEY) || '';
    cartItems = cartItems !== '' ? cartItems + `,${book.id}` : `${book.id}`;
    localStorage.setItem(LOCAL_STORAGE_ITEM_KEY, cartItems);
    setIsAlertOpen(true);
  };

  return !!book.id && (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={book.Title}
            height="340"
            image="https://picsum.photos/800"
            title={book.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {book.Title}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {book.Author}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              noWrap="true"
            >
              Genre: {book.Genre}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              noWrap="true"
            >
              Subgenre: {book.SubGenre}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              noWrap="true"
            >
              Book height: {book.Height}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              noWrap="true"
            >
              Publisher: {book.Publisher}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CardActions>
            <div>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={addToCart}
              >
                Add to Cart
                <AddShoppingCartIcon />
              </Button>
            </div>
          </CardActions>
        </div>
      </Card>
      <Snackbar
        open={isAlertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert onClose={handleAlertClose} severity="success">
          Item added to cart successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default BookDetails;
