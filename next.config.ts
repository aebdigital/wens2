import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/referencie.html", destination: "/referencie", permanent: true },
      { source: "/o-nas.html", destination: "/o-nas", permanent: true },
      { source: "/kontakt.html", destination: "/kontakt", permanent: true },
      { source: "/dvere.html", destination: "/produkty/dvere/seria-a", permanent: true },
      { source: "/schody.html", destination: "/produkty/schody", permanent: true },
      { source: "/nabytok.html", destination: "/produkty/nabytok", permanent: true },
      { source: "/obklady.html", destination: "/produkty/obklady", permanent: true },
      { source: "/celoskla.html", destination: "/produkty/celoskla/celoskla-css", permanent: true },
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
