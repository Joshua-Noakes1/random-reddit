const getRandomMeme = require('@blad3mak3r/reddit-memes');

// defined list of random clean image subreddits
var clean_subreddits = [
    "pic",
    "earthporn",
    "spaceporn",
    "itookapicture"
]

async function getReddit(subreddit) {
    if (subreddit != undefined && subreddit != '') {
        try {
            // get images from user defined subreddit
            return await getRandomMeme.getRandomMeme(subreddit);
        } catch (error) {
            console.error(error);
            return {
                "message": "failed"
            }
        }
    } else {
        try {
            // get random subreddit from clean_images
            var clean_images = Math.floor(Math.random() * clean_subreddits.length);
            clean_images = clean_subreddits[clean_images];
            return await getRandomMeme.getRandomMeme(clean_images);
        } catch (error) {
            console.error(error);
            return {
                "message": "failed"
            }
        }
    }
}

module.exports = {
    getReddit
}