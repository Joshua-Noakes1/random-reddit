# random-reddit
 A nodejs app to get a random image from reddit / imgur and return the data in json form.  

Based on Rasesh2005's Reddit-Meme-API, random-reddit serves to get a random image from a subreddit while using NodeJS.
## Usage
### /
By default this API gets images from r/pic, r/earthporn, r/spaceporn and r/itookapicture from what I can tell these subreddits are contain clean images and shouldn't give NSFW images back.
``` JSON
"id":"nhydk8",
"subreddit":"EarthPorn",
"title":"View of Alau Island from Koki Beach - Legend says Alau is a lost remnant of Maui, left behind when the gods pulled the islands from the ocean [OC] [2048x1536]",
"author":"friendlyMissAnthrope",
"image":"https://i.redd.it/felqbzy9gi071.jpg",
"ups":968,
"downs":0,
"score":968,
"comments":24,
"nsfw":false,
"createdUtc":1621618987
```

### /{subreddit}
You can supply your own subreddit at /reddit/{subreddit} where {subreddit} is the name, so for example "/reddit/NinoNakano"
``` JSON
"id":"nfrcc3",
"subreddit":"NinoNakano",
"title":"A Loving Gaze",
"author":"yolomlgnoscoper420",
"image":"https://i.redd.it/2jbsedgi4zz61.jpg",
"ups":103,
"downs":0,
"score":103,
"comments":1,
"nsfw":false,
"createdUtc":1621385265
```

## Credits
Blad3Mak3r's RedditMemes - [Github](https://github.com/Blad3Mak3r/RedditMemes) | [NPM Package](https://www.npmjs.com/package/@blad3mak3r/reddit-memes)