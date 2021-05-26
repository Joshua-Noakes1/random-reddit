# random-reddit
 A nodejs app to get a random image from reddit / imgur and return the data in json form.  

Based on Rasesh2005's Reddit-Meme-API, random-reddit serves to get a random image from a subreddit while using NodeJS.
## Usage
### /
By default this API gets images from r/pic, r/earthporn, r/spaceporn and r/itookapicture from what I can tell these subreddits are contain clean images and shouldn't give NSFW images back.
``` JSON
"success":"true",
"reddit":{
  "id":"nl8tus",
  "subreddit":"pic",
  "title":"Shoreline beach club in Marseille,FR.",
  "author":"Not_unkind",
  "image":"https://i.redd.it/3dxrnqdzce171.jpg",
  "ups":11,
  "downs":0,
  "score":11,
  "comments":0,
  "nsfw":false,
  "createdUtc":1622005294}
```

### /{subreddit}
You can supply your own subreddit at /reddit/{subreddit} where {subreddit} is the name, so for example "/reddit/NinoNakano"
``` JSON
"success":"true",
"reddit":{
  "id":"nl50vq",
  "subreddit":"NinoNakano",
  "title":"Imagine having a girlfriend",
  "author":"Th0tSlayer101",
  "image":"https://i.redd.it/8pjc2czl9d171.jpg",
  "ups":713,
  "downs":0,
  "score":713,
  "comments":6,
  "nsfw":false,
  "createdUtc":1621992054}
```

## Credits
Blad3Mak3r's RedditMemes - [Github](https://github.com/Blad3Mak3r/RedditMemes) | [NPM Package](https://www.npmjs.com/package/@blad3mak3r/reddit-memes)
