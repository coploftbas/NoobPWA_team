import React from 'react';

import ChannelItem from './ChannelItem.react';

class ChannelList extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="content">
                    <h2>Channel List</h2>
                </div>
                <ChannelItem />
                <ChannelItem />
            </div>
        );
    }
}

export default ChannelList;