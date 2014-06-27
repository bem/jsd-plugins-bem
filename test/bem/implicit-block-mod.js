/**
 * @module my-block
 */

modules.define('my-block', function(provide, MyBlock) {

/**
 * @exports
 * @class my-block
 * @bem
 */
provide(MyBlock.decl({ modName : 'mod1', modVal : 'val1' }));

});
