import * as React from "react";
import { withStyles, Theme, createStyles, WithStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import MarkdownSection from "./MarkdownSection";
import md from "./markdown";
import "./PrettyMarkdown.css";

const styles = (theme: Theme) => createStyles({
    prettyMarkdownRoot: {
        width: "max-content",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        margin: "auto",
        textAlign: "center"
    },
    independentContainer: {
    },
    paperContainer: {
        textAlign: "left",
        padding: "10px"
    },
    contentContainer: {
        overflowY: "auto",
        maxHeight: "--webkit-fill-available"
    },
});


export interface IMarkdownGridSection {
    title?: string;
    content: string;
}

export interface IPrettyMarkdownProps<T> extends WithStyles<typeof styles> {
    sections: IMarkdownGridSection[];
    usePaper?: boolean;
    usePanel?: boolean;
    className?: string;
    showPreview?: boolean;
}

function PrettyMarkdown(props: IPrettyMarkdownProps<typeof styles>) {
    const { classes } = props;


    return (
        <div className={props.className || classes.prettyMarkdownRoot} id="pretty-markdown-root">
            {
                props.usePaper ?
                    <Paper elevation={4} className={classes.paperContainer}>
                        {renderContent(props)}
                    </Paper>
                    :
                    <div className={classes.independentContainer}>
                        {renderContent(props)}
                    </div>
            }
        </div>
    );
}

function renderContent(props: IPrettyMarkdownProps<typeof styles>) {
    const { classes, sections } = props;

    return <div className={classes.contentContainer}>
        {sections.map((s: IMarkdownGridSection, idx: number) => {
            return <MarkdownSection
                key={`markdown-section-${idx}`}
                section={{
                    title: s.title,
                    content: md.render(s.content)
                }}
                usePanel={props.usePanel}
                showPreview={props.showPreview}
            />;
        })}
    </div>
}

export default (withStyles(styles)(PrettyMarkdown));