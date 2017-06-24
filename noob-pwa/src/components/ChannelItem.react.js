import React from 'react';

class ChannelItem extends React.Component {

    render() {

        const {
            logo, display_name, bio, _id
        } = this.props.channelDetail;

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

                <div className="media-content">
                    <div className="content has-text-centered">
                        <p className="subtitle"><strong>Channel's Details</strong></p>
                        <p className="subtitle"></p>
                    </div>
                </div>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Followers</p>
                            <p className="title" href="">123</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Subscribers</p>
                            <p className="title" href="">456</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Avg. play time</p>
                            <p className="title" href="">2 hrs/day</p>
                        </div>
                    </div>
                </nav>

                <hr />

                <div className="media-content">
                    <div className="content has-text-centered">
                        <p className="subtitle"><strong>Most Played Games</strong></p>
                        <p className="subtitle" href="">1. Counter-Strike: Global Offensive</p>
                        <p className="subtitle" href="">2. PLAYERUNKNOWN'S BATTLEGROUNDS</p>
                        <p className="subtitle" href="">3. Overwatch</p>
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