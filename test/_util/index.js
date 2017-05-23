var baseTestPlugins = require('jsd/test/_util').testPlugins,
    PATH = require('path'),
    PRJ_ROOT = PATH.join(__dirname, '..', '..');

exports.testPlugins = function(testFile) {
    return baseTestPlugins(
        testFile,
        PRJ_ROOT,
        [
            'file',
            'module',
            'class',
            'event',
            'type',
            'exports',
            'constructor',
            'access-level',
            'method-restrictions',
            'augments',
            'author',
            'version',
            'const',
            'deprecated',
            'param',
            'bem',
            'returns',
            'example',
            'license',
            'copyright',
            'see',
            'throws',
            'readonly',
            require('jsd/plugins/description')
        ].map(function(plugin) {
            return typeof plugin === 'string'?
                PATH.join(PRJ_ROOT, 'plugins', plugin) :
                plugin;
        }));
};
