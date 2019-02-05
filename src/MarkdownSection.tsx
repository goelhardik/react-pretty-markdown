import * as React from "react";
import { withStyles, Theme, createStyles, WithStyles } from "@material-ui/core/styles";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IMarkdownGridSection } from "./PrettyMarkdown";

const styles = (theme: Theme) => createStyles({
    sectionHeading: {
        fontSize: "38px !important",
        fontWeight: 200,
        color: "rgba(0, 0, 0, .77)",
        lineHeight: "38px !important"
    },
    panelTopBar: {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridColumnGap: "20px"
    }
});

export interface IMarkdownSectionProps extends WithStyles<typeof styles> {
    section: IMarkdownGridSection;
    usePanel?: boolean;
    showPreview?: boolean;
}

interface IMarkdownSectionState {
    expanded: boolean;
}

class MarkdownSection extends React.Component<IMarkdownSectionProps, IMarkdownSectionState> {

    constructor(props: IMarkdownSectionProps) {
        super(props);
        this.state = {
            expanded: props.section.title ? false : true
        };
    }

    public render() {
        const { classes, section } = this.props;
        const { expanded } = this.state;
        const shortCommentary = section.content.slice(0, 300) + "...";

        return (
            this.props.usePanel ?
                <ExpansionPanel expanded={expanded} onChange={this.handleChange} CollapseProps={{ timeout: 100 }}>
                    {section.title &&
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div className={classes.panelTopBar}>
                                <h3>{section.title}</h3>
                                {!this.state.expanded && this.props.showPreview && <Typography><div dangerouslySetInnerHTML={{ __html: shortCommentary }} /></Typography>}
                            </div>
                        </ExpansionPanelSummary>
                    }
                    <ExpansionPanelDetails>
                        <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                :
                <div>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
        );
    }

    handleChange = (event: React.ChangeEvent, expanded: boolean) => {
        this.setState({
            expanded: expanded
        });
    };
}

export default (withStyles(styles)(MarkdownSection));
