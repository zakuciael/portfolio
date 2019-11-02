import React from "react";

class Footer extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
          <span className="footer text-muted small">
              Powered by <a href="http://zakku.eu" className="text-muted">zakku.eu</a> &copy; {new Date().getFullYear()} All Rights Reserved.
          </span>
        );
    }
}

export {Footer};