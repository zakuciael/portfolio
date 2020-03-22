import React from "react";

interface SimpleTextProps {
    text: string;
}

class SimpleTitle extends React.Component<SimpleTextProps> {
    render() {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
}

export {SimpleTitle};