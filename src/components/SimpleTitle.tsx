import React from "react";

interface SimpleTextProps {
    text: string;
}

class SimpleTitle extends React.Component<SimpleTextProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
}

export {SimpleTitle};