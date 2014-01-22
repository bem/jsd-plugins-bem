/**
 * @module my-module
 */

modules.define('my-module', function(provide) {

provide(/** @exports */{
    /**
     * Description of method1
     * @type Function
     */
    method1 : buildFn(),

    /**
     * Description of field1
     */
    field1 : buildField()
});

});
