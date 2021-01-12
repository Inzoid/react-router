const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/streaming_url", {
      target: "https://www.showroom-live.com/api/live",
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware("/comment_log", {
      target: "https://www.showroom-live.com/api/live",
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware("/profile", {
      target: "https://www.showroom-live.com/api/room",
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware("/onlives", {
      target: "https://www.showroom-live.com/api/live",
      changeOrigin: true,
    }),
  );
};