/**
 * @module i-bem__dom
 */

modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

/**
 * @exports i-bem__dom:blocks.checkbox
 * @class checkbox
 * @bem
 *
 * @bemmod checked Represents checkbox checked state
 * @bemmod disabled Represents checkbox disabled state
 * @bemmod focused Represents checkbox focused state
 */

 /**
 * @event change Emitted on change checked state
 * @param {events:Event} e Event object
 */

 /**
 * @event focus Emitted on focus
 * @param {events:Event} e Event object
 */

 /**
 * @event blur Emitted on blur
 * @param {events:Event} e Event object
 */

BEMDOM.decl('checkbox', /** @lends checkbox.prototype */{
    beforeSetMod : {
        'focused' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._focused = false;
            }
        },

        'checked' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
            this.emit('change');
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
        },

        'focused' : {
            'true' : function() {
                this._focused || this._focus();
                this.emit('focus');
            },

            '' : function() {
                this._focused && this._blur();
                this.emit('blur');
            }
        }
    },

    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this.elem('control').val();
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.elem('control').attr('name');
    },

    _focus : function() {
        this.elem('control').focus();
    },

    _blur : function() {
        this.elem('control').blur();
    },

    _onFocus : function() {
        this._focused = true;
        this.setMod('focused');
    },

    _onBlur : function() {
        this._focused = false;
        this.delMod('focused');
    },

    _onChange : function() {
        this.setMod('checked', this.elem('control').prop('checked'));
    }
}, {
    live : function() {
        this
            .liveBindTo('focusin', function() {
                this._onFocus();
            })
            .liveBindTo('focusout', function() {
                this._onBlur();
            })
            .liveBindTo('change', function() {
                this._onChange();
            });
    }
});

provide(BEMDOM);

});
