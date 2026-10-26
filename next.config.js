/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [{ source: "/api/leads", destination: "/api/lead" }];
  },
};
