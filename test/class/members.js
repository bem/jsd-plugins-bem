/**
 * @module my-module
 */

modules.define('my-module', function(provide) {

/**
 * @class ModuleClass
 * @exports my-module
 */
var ModuleClass = inherit(/** @lends ModuleClass.prototype */{
    /**
     * @constructor
     */
    __constructor : function() {
        /** @member {Number} */
        this.member1 = 1;

        bla[/** @member {Number} */this.member2 = 2];
    }
});

provide(ModuleClass);

});