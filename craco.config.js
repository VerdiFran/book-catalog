const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#0b3b24'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}