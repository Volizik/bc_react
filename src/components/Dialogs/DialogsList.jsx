import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {DialogsListItem} from "./DialogsListItem";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 450,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const DialogsList = () => {
    const classes = useStyles();
    const users = useSelector(state => state.dialog.users);
    const dialogs = useSelector(state => state.dialog.list);

    console.log(dialogs)

    return (
        <List className={classes.root}>
            {users.map(user => (
                <DialogsListItem user={user} key={user.id}/>
            ))}
        </List>
    );
}
