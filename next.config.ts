import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    logging:{
        fetches: {
            fullUrl:true, 
            hmrRefreshes:true
        },
        incomingRequests:true
    },

    cacheComponents: true,

  /* config options here */
};

export default nextConfig;
