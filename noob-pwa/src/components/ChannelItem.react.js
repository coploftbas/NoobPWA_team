import React from 'react';

import {
    fetchUserFollowers,
    fetchUserVideos,
    fetchUserBadges,
    //fetchUserEmotes
} from '../api';

class ChannelItem extends React.Component {

    state = {
        logo: '',
        display_name: 'Loading ...',
        bio: '',
        followers: 0,
        videos: 0,
        sumPlayedTime: 0,
        playedGames: [],
        badges: null
    }

    componentDidMount() {
        const uid = this.props.channelDetail._id;

        // fetch amount of followers
        fetchUserFollowers(uid).then(allFollowers => {
            this.setState({
                followers: allFollowers._total
            })
        });

        // fetch amount of videos, avg. play time, and games played
        fetchUserVideos(uid).then(allVideos => {
            // Get sum times from 10 most recent videos
            let videos = allVideos.videos;

            this.setState({
                videos: allVideos._total,
            });

            // console.log(videos);
            let arrayTimes = videos.map((eachVideo) => {
                return eachVideo.length;
            });

            if (arrayTimes.length > 0) {
                let sumTimes = arrayTimes.reduce((a, b) => { return a + b; });

                // Get all games from 10 most recent videos
                let arrayGames = videos.map((eachVideo) => {
                    return eachVideo.game;
                });
                let playedGames = arrayGames.filter((x, i, a) => a.indexOf(x) === i);
                
                this.setState({
                    sumPlayedTime: sumTimes,
                    playedGames: playedGames
                });
            }
        });

        // Get subscriber's badge
        fetchUserBadges(uid).then(allBadges => {
            // console.log(allBadges.badge_sets.hasOwnProperty('subscriber'));

            if (allBadges.badge_sets.hasOwnProperty('subscriber')) {
                this.setState({
                    badges: allBadges.badge_sets.subscriber.versions
                });
            }
        });

        // fetchUserEmotes(uid).then(allEmotes => {
        //     console.log(allEmotes);
        // });


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
        const { logo, display_name, bio, followers, videos, sumPlayedTime, badges } = this.state;
        const renderGamePlayed = this.state.playedGames.map((gameName, i) => {
            return <p className="subtitle" href="" key={gameName}>{i + 1}. {gameName}</p>;
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
                            <p className="heading">Videos</p>
                            <p className="title" href="">{videos}</p>
                        </div>
                    </div>
                </nav>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Average Played Time</p>
                            <p className="title" href="">{this.toHHMMSS(Math.round(sumPlayedTime / 10))}</p>
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
                {badges && <nav className="level is-mobile">
                    {badges && badges[0] && <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">1 month</p>
                            <img src={badges[0].image_url_2x} alt="" />
                        </div>
                    </div>}
                    {badges && badges[3] && <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">3 months</p>
                            <img src={badges[3].image_url_2x} alt="" />
                        </div>
                    </div>}
                    {badges && badges[6] && <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">6 months</p>
                            <img src={badges[6].image_url_2x} alt="" />
                        </div>
                    </div>}
                </nav>}
                {badges && badges[12] && <nav className="level is-mobile">
                    {badges && badges[12] && <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">12 months</p>
                            <img src={badges[12].image_url_2x} alt="" />
                        </div>
                    </div>}
                    {badges && badges[24] && <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">24 months</p>
                            <img src={badges[24].image_url_2x} alt="" />
                        </div>
                    </div>}
                </nav>}

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