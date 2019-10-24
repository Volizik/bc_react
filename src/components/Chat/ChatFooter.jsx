import React, {useState} from 'react';
import {Icon, makeStyles, TextField, Button} from '@material-ui/core';
import {sendMessage} from "../../services/chat";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: 0,
        marginBottom: 0
    },
    button: {
        marginLeft: theme.spacing(1),
    },
}));

export const ChatFooter = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const profile = useSelector(state => state.profile);
    console.log(profile)

    return (
        <div className={classes.wrapper}>
            <TextField
                label="Type your message..."
                multiline
                value={value}
                rowsMax="4"
                onChange={(event) => setValue(event.target.value)}
                fullWidth
                variant="outlined"
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={() => sendMessage({userId: profile.id, text: value, dialogId: ''})}
            >
                Send
            </Button>
        </div>
    )
};
