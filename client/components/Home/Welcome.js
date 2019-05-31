import htmlContent from 'client/components/Home/home.html';
import React from 'react';
const Welcome = React.createClass({
    render() {
        return (
            <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
        );
    }
});
export default Welcome;