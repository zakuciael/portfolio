import React from "react";

interface AvatarProps {
    url: string;
    alt: string;
}

class Avatar extends React.Component<AvatarProps> {
    render() {
        return (
            <div className="avatar" style={{ backgroundImage: `url(${this.props.url})` }} />
        );
    }
}

export {Avatar};