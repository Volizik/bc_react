import React from 'react';
import {ChatBody} from "./ChatBody";
import {ChatFooter} from "./ChatFooter";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 55px)'
    }
});

export const Chat = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <ChatBody />
            <ChatFooter />
        </div>
    )
}
