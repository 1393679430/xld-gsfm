const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware(
            '/juhe',
            {
                target: 'http://v.juhe.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/juhe': ''
                },
            }
        )
    );
};
