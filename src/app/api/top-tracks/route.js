import { getTopTracks } from "@/lib/spotify";


export async function GET(req) {

    try {
        const tracks = await getTopTracks("short_term", 40);
        // console.log("Tracks : ", JSON.stringify(tracks));
        // return new Response(JSON.stringify(tracks), { status: 200 });

        // now we want to return the first 4 who are not on the same album (i.e. not same alnbum cover)
            // we're considering them as 'albums' in full, so we'll record album data
        const resp = []
        const usedUris = new Set();
        resp.push({
            name : tracks[0].album.name,
            uri : tracks[0].album.uri,
            images : tracks[0].album.images,
            url : tracks[0].album.external_urls.spotify
        });

        usedUris.add(tracks[0].album.uri);

        for (let alb of tracks) {
            if (usedUris.has(alb.album.uri)) {
                continue;
            }

            resp.push({
                name : alb.album.name,
                uri : alb.album.uri,
                images : alb.album.images,
                url : alb.album.external_urls.spotify
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