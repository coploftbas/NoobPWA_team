import React from 'react';

import NewChannelForm from '../components/NewChannelForm.react';
import ChannelList from '../components/ChannelList.react';

import { fetchTwitchChannel } from '../api';

class Dashboard extends React.Component {

    state = {
        allChannel: []
    }

    componentDidMount() {
        this.addChannel('cigarettestv');
        this.addChannel('mithjinny');
    }

    addChannel(channelName) {
        fetchTwitchChannel(channelName)
            .then( newChannel => { 
                let tmpAllChannel = this.state.allChannel;
                this.setState({ allChannel: tmpAllChannel.concat(newChannel) }) 
            });
    }

    render() {
        // console.log(`DashBoard state.allChannel`);
        // console.log(this.state.allChannel);
        const tmpAllChannel = this.state.allChannel;
        return (
            <div>
                <NewChannelForm />
                <hr />
                <ChannelList allChannel={tmpAllChannel} />
            </div>
        );
    }
}

export default Dashboard;