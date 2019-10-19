import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'inline',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

export const DialogsListItem = ({user}) => {
    const classes = useStyles();

    return (
        <Link to='/123' className={classes.link}>
            <ListItem alignItems="flex-start" button >
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.login}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </Link>
    )
}
