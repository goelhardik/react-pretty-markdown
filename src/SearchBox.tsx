import * as React from "react";
import { withStyles, Theme, createStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
    root: {
        width: "100%",
        fontFamily: "Georgia, Helvetica, Tahoma, Sans-Serif, Gaura Times, Serif",
    }
});

export interface ISearchBoxProps<T> extends WithStyles<typeof styles> {
}

interface ISearchBoxState {
}

class SearchBox extends React.Component<ISearchBoxProps<any>, ISearchBoxState> {

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                BLAH
            </div>
        );
    }
}

export default (withStyles(styles)(SearchBox));