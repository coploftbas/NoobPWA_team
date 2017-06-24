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
export function fetchUserFollow(userId) {
    console.log(`[API fetchUserFollow] userId = ${userId}`);
    let headers = new Headers({
        "Accept": `application/vnd.twitchtv.v5+json`,
        "Client-ID": `l4tlgzjwaa254v4e85h65pj2ojypgg`
    });
    return fetch(`https://api.twitch.tv/kraken/channels/${userId}/follows`, { headers }).then(res => res.json());
}