# Playlist Transfers

Fixing yet another problem I had in my day-to-day life. I'm a Spotify subscriber, but I have friends who are Apple Music subscribers. I wanted a way to get my friend's playlist of over 1000 songs over to Spotify.

My solution was a Node.js backend that used Playwright to scrape the Apple Music site, convert that to JSON, and use the Spotify API to create the playlist and find each song. Convoluted? Sure. Unnecessary? Yes. Compute-intensive? Playwright. A huge learning experience? Definitely.

Oh yeah, and it was the first time I'd ever shipped a React app.

## Problems

You'll notice below that I've linked two different repositories — one for frontend and one for backend. At first, I was feeling my way through Next.js APIs, despite never writing an API in my life. I then found that Next has time limits for APIs, so I had to deploy my own server on an Ubuntu instance on a Digital Ocean droplet. Wayyyy overkill, but it got the job done.

## Links
- [Frontend](https://github.com/gpossst/playlist-transfer)
- [Backend](https://github.com/gpossst/playlist-backend)

###  October 2024 to December 2024