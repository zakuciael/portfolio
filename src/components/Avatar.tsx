import React from "react";

interface AvatarProps {
    url: string;
    alt: string;
}

class Avatar extends React.Component<AvatarProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="avatar">
                <img src={this.props.url} alt={this.props.alt}/>
            </div>
        );
    }
}

export {Avatar};