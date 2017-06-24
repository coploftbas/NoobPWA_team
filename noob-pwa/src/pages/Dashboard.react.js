import React from 'react';

import NewChannelForm from '../components/NewChannelForm.react';
import ChannelList from '../components/ChannelList.react';


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <NewChannelForm />
                <hr />
                <ChannelList />
            </div>
        );
    }
}

export default Dashboard;