// ****************** Public function ******************

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

// Fetch videos
// JSON response consist of
// - _total
// - length
// - game
export function fetchUserVideos(channelId) {
    console.log(`[API fetchUserVideos] channelId = ${channelId}`);
    let headers = new Headers({
        "Accept": `application/vnd.twitchtv.v5+json`,
        "Client-ID": `l4tlgzjwaa254v4e85h65pj2ojypgg`
    });
    return fetch(`https://api.twitch.tv/kraken/channels/${channelId}/videos`, { headers }).then(res => res.json());
}

// Fetch subscriber badges
export function fetchUserBadges(channelId) {
    console.log(`[API fetchUserBadges] channelId = ${channelId}`);
    let headers = new Headers({
        "Accept": `application/vnd.twitchtv.v5+json`,
        "Client-ID": `l4tlgzjwaa254v4e85h65pj2ojypgg`
    });

    return fetch(`https://badges.twitch.tv/v1/badges/channels/${channelId}/display`, { headers }).then(res => res.json());
}

// // Fetch subscriber emoticons
// export function fetchUserEmotes(channelId) {
//     console.log(`[API fetchUserEmotes] channelId = ${channelId}`);
//     let headers = new Headers({
//         "Accept": `application/vnd.twitchtv.v5+json`,
//         "Client-ID": `l4tlgzjwaa254v4e85h65pj2ojypgg`
//     });

//     return fetch(`https://api.twitch.tv/kraken/chat/${channelId}/emoticons`, { headers }).then(res => res.json());
// }