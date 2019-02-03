import * as React from "react";
import { withStyles, Theme, createStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
    root: {
        width: "100%",
        fontFamily: "Georgia, Helvetica, Tahoma, Sans-Serif, Gaura Times, Serif",
    }
});

export interface IPrettyMarkdownProps<T> extends WithStyles<typeof styles> {
}

function PrettyMarkdown(props: IPrettyMarkdownProps<typeof styles>) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            BLAH
        </div>
    );
}

export default (withStyles(styles)(PrettyMarkdown));