import React from 'react';

import NewChannelForm from '../components/NewChannelForm.react';
import ChannelList from '../components/ChannelList.react';

import { fetchTwitchChannel } from '../api';

class Dashboard extends React.Component {

    state = {
        allChannel: []
    }

    componentDidMount() {
        // Get channelName from localStorage, then call loadFromLocalStorageToState()
        if (localStorage.selectedChannel) {
            let jsonChannel = JSON.parse(localStorage.selectedChannel);
            jsonChannel.map((cName) => {
                fetchTwitchChannel(cName.name)
                    .then(newChannel => {
                        let tmpAllChannel = this.state.allChannel;
                        this.setState({ allChannel: tmpAllChannel.concat(newChannel) });
                    });
                    return true;
            });
        }
    }

    saveChannelToLocalStorage(newChannelName) {
        let allChannelJson = JSON.parse(localStorage.selectedChannel);
        allChannelJson.push({ name: newChannelName });
        let selectedChannel = JSON.stringify(allChannelJson);
        localStorage.selectedChannel = selectedChannel;
        console.log('[localStorage] add new channel : ' + localStorage.selectedChannel);
    }

    addChannel(channelName) {
        if (localStorage.selectedChannel) {
            // Already have localStorage
            let lsSc = localStorage.selectedChannel;
            if (!lsSc.includes(channelName)) {
                // add channelName to localStorage + fetch
                this.saveChannelToLocalStorage(channelName);

                fetchTwitchChannel(channelName)
                    .then(newChannel => {
                        let tmpAllChannel = this.state.allChannel;
                        this.setState({ allChannel: tmpAllChannel.concat(newChannel) })
                    });
            } else {
                // channel already exist in your list
                console.log('Channel already exist in list.');
                alert('Channel already exist in list.');
            }
        } else {
            // First time using the app
            localStorage.selectedChannel = JSON.stringify([{ name: channelName }]);

            fetchTwitchChannel(channelName)
                .then(newChannel => {
                    let tmpAllChannel = this.state.allChannel;
                    this.setState({ allChannel: tmpAllChannel.concat(newChannel) })
                });
        }
    }

    render() {
        const tmpAllChannel = this.state.allChannel;
        return (
            <div>
                <NewChannelForm onClick={(channelName) => this.addChannel(channelName)} />
                <hr />
                <ChannelList allChannel={tmpAllChannel} />
            </div>
        );
    }
}

export default Dashboard;