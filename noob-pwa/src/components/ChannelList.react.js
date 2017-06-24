import React from 'react';

import ChannelItem from './ChannelItem.react';

class ChannelList extends React.Component {

    render() {
        console.log(this.props.allChannel);

        const renderAllChannel = this.props.allChannel.map( eachChannel =>
            { return <ChannelItem key={eachChannel.name}/> }
        );

        return (
            <div className="section">
                <div className="content">
                    <h2>Channel List</h2>
                </div>
                { renderAllChannel }
            </div>
        );
    }
}

export default ChannelList;