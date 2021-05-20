import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const CartItems = ({ items, onRemoveItemFromCart }) => {
  const cardStyles = makeStyles({
    root: {
      minWidth: '50%',
      marginBottom: 8,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = cardStyles();

  return (
    <>
      {Object.keys(items).map(itemIndex => {
        const item = items[itemIndex];

        return (
          <>
            <Card key={item.id} className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {item.Title}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {item.Author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => onRemoveItemFromCart(item.id)}
                >
                  Remove from cart <DeleteIcon />
                </Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default CartItems;
