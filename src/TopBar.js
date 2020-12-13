import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

const React = require('react');

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const topBarTheme = createMuiTheme({
    palette: {
        primary: {
            main: red[300],
        },
    },
});

export function TopBar(props) {
    const classes = useStyles();
    return (<AppBar position="static" elevation={4}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {props.labels.title}
                </Typography>
                <Button onClick={() => props.setLang('en')} className={classes.menuButton} color="inherit" aria-label="menu">
                    {'English'}
                </Button>
                <Button onClick={() => props.setLang('pl')}  className={classes.menuButton} color="inherit" aria-label="menu">
                    {'Polski'}
                </Button>
            </Toolbar>
        </AppBar>
    );
}