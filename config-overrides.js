const { override,addWebpackAlias,addDecoratorsLegacy} = require('customize-cra');
module.exports = override(
    addWebpackAlias({

    }),
    addDecoratorsLegacy()
);