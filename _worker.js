export default {
  async fetch(request, env, ctx) {
    const hostname = new URL(request.url).hostname;

    const redirects = {
      "adoptionchain.com": "https://www.godaddy.com/forsale/adoptionchain.com?utm_source=TDFS_BINNS&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns_base&traffic_type=TDFS_BINNS&traffic_id=binns",
      "aeronauticchain.com": "https://www.godaddy.com/forsale/aeronauticchain.com?utm_source=TDFS_BINNS&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns_base&traffic_type=TDFS_BINNS&traffic_id=binns",
      // Add all other domains here...
    };

    const target = redirects[hostname];
    if (target) {
      return Response.redirect(target, 301);
    } else {
      return new Response("Domain not found", { status: 404 });
    }
  }
};
