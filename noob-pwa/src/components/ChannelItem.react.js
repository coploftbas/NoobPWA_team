import React from 'react';

import { fetchUserFollowers/*, fetchUserSubscribers*/, fetchUserVideos } from '../api';

class ChannelItem extends React.Component {

    state = {
        logo: '',
        display_name: 'Loading ...',
        bio: '',
        followers: 0,
        subscribers: 0,
        videos: 0,
        sumPlayedTime: 0,
        playedGames: []
    }

    componentDidMount() {
        const uid = this.props.channelDetail._id;

        // fetch amount of followers
        fetchUserFollowers(uid).then(allFollowers => {
            this.setState({
                followers: allFollowers._total
            })
        });

        // fetch amount of subscribers
        // fetchUserSubscribers(uid).then(allSubscribers => {
        //     console.log(allSubscribers);
        //     this.setState({
        //         subscribers: allSubscribers._total
        //     })
        // });

        fetchUserVideos(uid).then(allVideos => {
            // Get sum times from 10 most recent videos
            let videos = allVideos.videos;
            let arrayTimes = videos.map((eachVideo) => {
                return eachVideo.length;
            });
            let sumTimes = arrayTimes.reduce((a, b) => { return a + b; });

            // Get all games from 10 most recent videos
            let arrayGames = videos.map((eachVideo) => {
                return eachVideo.game;
            });
            let playedGames = arrayGames.filter((x, i, a) => a.indexOf(x) === i);
            // console.log(playedGames);

            this.setState({
                videos: allVideos._total,
                sumPlayedTime: sumTimes,
                playedGames: playedGames
            });
        });

        const userBio = this.props.channelDetail.bio === null ? 'This user has no bio.' : this.props.channelDetail.bio;
        this.setState({
            logo: this.props.channelDetail.logo,
            display_name: this.props.channelDetail.display_name,
            bio: userBio,
        });
    }

    toHHMMSS(val) {
        var sec_num = parseInt(val, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return hours + 'h ' + minutes + 'm ' + seconds + 's';
    }

    render() {
        const { logo, display_name, bio, followers, subscribers, videos, sumPlayedTime } = this.state;
        const renderGamePlayed = this.state.playedGames.map((gameName, i) => {
            return <p className="subtitle" href="" key={gameName}>{i+1}. {gameName}</p>;
        });

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img alt="" src={logo} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong><a className="title" href="">
                                    {display_name}
                                </a></strong>
                            </p>
                            <p className="subtitle">
                                {bio}
                            </p>
                        </div>
                    </div>
                </article>

                <hr />

                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Followers</p>
                            <p className="title" href="">{followers}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Subscribers</p>
                            <p className="title" href="">{subscribers}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Videos</p>
                            <p className="title" href="">{videos}</p>
                        </div>
                    </div>
                </nav>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Avegage Played Time</p>
                            <p className="title" href="">{this.toHHMMSS(Math.round(sumPlayedTime/10))}</p>
                        </div>
                    </div>
                </nav>

                <hr />

                <div className="media-content">
                    <div className="content has-text-centered">
                        <p className="subtitle"><strong>Recent Played Games</strong></p>
                        {renderGamePlayed}
                    </div>
                </div>

                <hr />

                <div className="media-content">
                    <div className="content has-text-centered">
                        <p className="subtitle"><strong>Subscriber's Badges</strong></p>
                        <p className="subtitle"></p>
                    </div>
                </div>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">1 month</p>
                            <img src="https://static-cdn.jtvnw.net/badges/v1/c375d14f-bed6-464d-943a-49b6768ac9ad/2" alt="" />
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">3 months</p>
                            <img src="https://static-cdn.jtvnw.net/badges/v1/f8fb3ee8-0f03-45b0-b023-c0e85650ba2f/2" alt="" />
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">6 months</p>
                            <img src="https://static-cdn.jtvnw.net/badges/v1/fae953aa-e9f3-463a-b68c-df172dd750a2/2" alt="" />
                        </div>
                    </div>
                </nav>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">12 months</p>
                            <img src="https://static-cdn.jtvnw.net/badges/v1/7b785413-932a-4a70-ac9e-f2869faf9c47/2" alt="" />
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">24 months</p>
                            <img src="https://static-cdn.jtvnw.net/badges/v1/a088a237-1c7a-4e76-9b39-6bc0ce1e297f/2" alt="" />
                        </div>
                    </div>
                </nav>

                <hr />

                <div className="media-content">
                    <div className="content has-text-centered">
                        <p className="subtitle"><strong>Subscriber's Emotes</strong></p>
                        <p className="subtitle"></p>
                    </div>
                </div>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <img src="https://static-cdn.jtvnw.net/emoticons/v1/195473/1.0" alt="" />
                            <img src="https://static-cdn.jtvnw.net/emoticons/v1/195473/1.0" alt="" />
                            <img src="https://static-cdn.jtvnw.net/emoticons/v1/195473/1.0" alt="" />
                            <img src="https://static-cdn.jtvnw.net/emoticons/v1/195473/1.0" alt="" />
                            <img src="https://static-cdn.jtvnw.net/emoticons/v1/195473/1.0" alt="" />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default ChannelItem;