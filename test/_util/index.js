var baseTestPlugins = require('jsd/test/_util').testPlugins,
    PATH = require('path'),
    PRJ_ROOT = PATH.join(__dirname, '..', '..');

exports.testPlugins = function(testFile) {
    return baseTestPlugins(
        testFile,
        PRJ_ROOT,
        [
            'module',
            'class',
            'event',
            'type',
            'exports',
            'description',
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
            'license'
        ].map(function(plugin) {
            return PATH.join(PRJ_ROOT, 'plugins', plugin);
        }));
};
