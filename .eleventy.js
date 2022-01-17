module.exports = function (config) {
    config.addPassthroughCopy('images');
    config.addPassthroughCopy('style.css');
    config.addPassthroughCopy('works.css');
    config.addPassthroughCopy('index.js');

    // Override Browsersync defaults (used only with --serve)
    config.setBrowserSyncConfig({
        ui: false,
        ghostMode: false,
    });

    return {
        // Control which files Eleventy will process
        templateFormats: ['md', 'njk', 'html', 'liquid'],

        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: 'njk',

        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: 'njk',

        // These are all optional (defaults are shown):
        dir: {
            input: '.',
            includes: '_includes',
            data: '_data',
            output: '_site',
        },
    };
};
