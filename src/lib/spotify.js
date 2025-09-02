const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi(
    { 
        clientId : process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
        clientSecret : process.env.SPOTIFY_CLIENT_SECRET,
    }
);

export default spotifyApi;