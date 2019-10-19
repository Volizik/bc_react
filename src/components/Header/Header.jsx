import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: 'none',
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to="/" className={classes.link}>
                <Button variant="outlined" color="secondary" className={classes.button}>
                    Chats
                </Button>
            </Link>
        </div>
    );
}
