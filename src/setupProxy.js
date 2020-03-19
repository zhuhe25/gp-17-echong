const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/v3",createProxyMiddleware({
        target:"http://localhost:9000",
        changeOrigin:true
    }))
}