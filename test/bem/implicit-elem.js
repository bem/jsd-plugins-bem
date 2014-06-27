/**
 * @module my-block__elem1
 */

modules.define('my-block__elem1', ['my-block'], function(provide, MyBlock) {

/**
 * @exports
 * @class my-block__elem1
 * @bem
 */
provide(MyBlock.decl({ elem : 'elem1' }));

});
