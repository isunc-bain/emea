import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { config } from '../../server/routes/api/config';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookCard from './BookCard';

const CategoryPage = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  const classes = useStyles();

  const [books, setBooks] = useState({});

  useEffect(() => {
    function fetchBooks() {
      fetch(config.API_URL + '/api/books')
        .then(res => res.json())
        .then(booksObj => setBooks(booksObj));
    }

    fetchBooks();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Book Shop
          </Typography>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <BookCard books={books} />
      </main>
    </div>
  );
};

export default CategoryPage;
