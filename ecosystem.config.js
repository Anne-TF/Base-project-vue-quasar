module.exports = {
    apps : [{
        name: 'bilu-app',
        script: './dist/ssr/index.js',
        error_file: './dist/logs/err.log',
        watch: false,
        instances: 1,
        ignore_watch: './dist/logs/*',
        instance_var: '0',
        env: {
            NODE_ENV: 'production',
            NODE_CONFIG_STRICT_MODE: true
        }
    }]
};
