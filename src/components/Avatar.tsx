import React from "react";

interface AvatarProps {
    url: string;
    alt: string;
}

class Avatar extends React.Component<AvatarProps> {
    render() {
        return (
            <div className="avatar">
                <img src={this.props.url} alt={this.props.alt}/>
            </div>
        );
    }
}

export {Avatar};