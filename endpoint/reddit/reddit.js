// config
require('dotenv').config()
const reddit = require('./get-reddit');
const express = require('express');
const router = express.Router();

// get reddit images /reddit
router.get('/', async (req, res, next) => {
    var reddit_image = await reddit.getReddit();

    // send 415 error if an error occurs in the code
    if (reddit_image.message) {
        res.status(415).json({
            "message": "failed"
        });
        return;
    }

    // respond with the json
    res.status(200).json(reddit_image);
});

// user defined subreddit /reddit/{subreddit}
router.get('/:subreddit', async (req, res, next) => {
    var reddit_image = await reddit.getReddit(req.params.subreddit);

    // send 415 error if an error occurs in the code
    if (reddit_image.message) {
        res.status(415).json({
            "message": "failed"
        });
        return;
    }

    // respond with the json
    res.status(200).json(reddit_image);
});

module.exports = router;