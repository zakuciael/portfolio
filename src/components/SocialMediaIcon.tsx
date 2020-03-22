import React from "react";
import ReactTooltip from 'react-tooltip'
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface SocialMediaIconProps {
    icon: IconProp;
    name: string;
    text: string;
    url?: string;
}

class SocialMediaIcon extends React.Component<SocialMediaIconProps> {
    render() {
        return (
            <div className="icon">
                <a href={this.props.url || this.props.name} data-tip="" data-for={this.props.name} onClick={event => !this.props.url ? event.preventDefault() : ""}>
                    <FontAwesomeIcon icon={this.props.icon} size="2x" />
                </a>
                <ReactTooltip id={this.props.name} effect='solid'>
                    <span>{this.props.text}</span>
                </ReactTooltip>
            </div>
        );
    }
}

export {SocialMediaIcon};