/**
 * @module my-block2
 */

modules.define('my-block2', ['my-block', 'i-bem__dom'], function(provide, MyBlock, BEMDOM) {

/**
 * @exports
 * @class my-block2
 * @augments my-block
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : MyBlock }));

});
