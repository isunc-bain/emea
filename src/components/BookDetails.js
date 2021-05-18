import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import React from 'react';

const BookCard = ({ books }) => {
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
      {Object.keys(books).map(bookIndex => {
        const book = books[bookIndex];

        return (
          <Card key={book.id} className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {book.Title}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {book.Author}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Book in detail</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default BookCard;
