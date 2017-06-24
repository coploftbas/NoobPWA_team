// Public function

// Fetching user by given userName
// JSON response consist of
// - logo
// - display_name
// - bio
// - _id (for fetching other details)
export function fetchTwitchChannel(userName) {
    console.log(`[API fetchTwitchChannel] userName = ${userName}`);
    let headers = new Headers({
        "Authorization": `OAuth o0wm5tyyefce93aaep8jnjceu2p3u7`
    });
    return fetch(`https://api.twitch.tv/kraken/users/${userName}`, { headers }).then(res => res.json());
}


// Fetch followers
// will take only _total
export function fetchUserFollowers(channelId) {
    console.log(`[API fetchUserFollow] channelId = ${channelId}`);
    let headers = new Headers({
        "Accept": `application/vnd.twitchtv.v5+json`,
        "Client-ID": `l4tlgzjwaa254v4e85h65pj2ojypgg`
    });
    return fetch(`https://api.twitch.tv/kraken/channels/${channelId}/follows`, { headers }).then(res => res.json());
}

// Fetch subscribers
// will take only _total
// STILL have problems causing from scope auth
export function fetchUserSubscribers(channelId) {
    console.log(`[API fetchUserSubscribers] channelId = ${channelId}`);
    let headers = new Headers({
        "Accept": `application/vnd.twitchtv.v5+json`,
        "Client-ID": `l4tlgzjwaa254v4e85h65pj2ojypgg`,
        "Authorization": `OAuth 0ryuz4kz8smkenjrfg8uzzo2blton3`
    });
    return fetch(`https://api.twitch.tv/kraken/channels/${channelId}/subscriptions`, { headers }).then(res => res.json());
}

// Fetch videos
// will take only _total
// might able to get [games, avg length] in here
export function fetchUserVideos(channelId) {
    console.log(`[API fetchUserVideos] channelId = ${channelId}`);
    let headers = new Headers({
        "Accept": `application/vnd.twitchtv.v5+json`,
        "Client-ID": `l4tlgzjwaa254v4e85h65pj2ojypgg`
    });
    return fetch(`https://api.twitch.tv/kraken/channels/${channelId}/videos/#limit=100`, { headers }).then(res => res.json());
}