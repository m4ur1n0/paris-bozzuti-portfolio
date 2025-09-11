import { getRecentTracks } from "@/lib/spotify";


export async function GET(req) {

    try {
        const tracks = await getRecentTracks(40);
        // console.log("Tracks : ", JSON.stringify(tracks));
        // console.log("TRACSK : ", tracks);
        // return new Response(JSON.stringify(tracks), { status: 200 });

        // now we want to return the first 4 who are not on the same album (i.e. not same alnbum cover)
            // we're considering them as 'albums' in full, so we'll record album data
        const resp = []
        const usedUris = new Set();
        resp.push({
            name : tracks[0].track.album.name,
            uri : tracks[0].track.album.uri,
            images : tracks[0].track.album.images,
            url : tracks[0].track.album.external_urls.spotify
        });

        usedUris.add(tracks[0].track.album.uri);

        for (let alb of tracks) {
            if (usedUris.has(alb.track.album.uri)) {
                continue;
            }

            resp.push({
                name : alb.track.album.name,
                uri : alb.track.album.uri,
                images : alb.track.album.images,
                url : alb.track.album.external_urls.spotify
            });

            if (resp.length >= 4) {
                break;
            }
        }

        return new Response(JSON.stringify(resp), {status : 200});


    } catch (err) {
        console.error("Spotify error:", err);
        return new Response(JSON.stringify({error : "Failed to fetch tracks"}), { status: 500 });
    }

}