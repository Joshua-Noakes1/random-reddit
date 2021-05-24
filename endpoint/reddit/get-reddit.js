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
            var reddit = await getRandomMeme.getRandomMeme(subreddit);
            return {
                "success": "true",
                reddit
            }

        } catch (error) {
            console.error(error);
            return {
                "success": "false",
                "error": error.message
            }
        }
    } else {
        try {
            // get random subreddit from clean_images
            var clean_images = Math.floor(Math.random() * clean_subreddits.length);
            clean_images = clean_subreddits[clean_images];
            var reddit = await getRandomMeme.getRandomMeme(clean_images);
            return {
                "success": "true",
                reddit
            };
        } catch (error) {
            console.error(error);
            return {
                "success": false,
                "error": error.message
            }
        }
    }
}

module.exports = {
    getReddit
}