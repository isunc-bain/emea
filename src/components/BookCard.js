import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

const BookCard = ({ books }) => {
  const cardStyles = makeStyles({});

  const classes = cardStyles();

  return (
    <>
      <div className="container">
        {Object.keys(books).map(bookIndex => {
          const book = books[bookIndex];

          return (
            <Card key={book.id} className="item">
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
                <Link
                  to={`/books/${book.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="contained" color="primary" size="small">
                    Book details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default BookCard;
