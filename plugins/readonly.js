module.exports = function(jsdoc) {
    jsdoc
        .registerParser('readonly', Boolean)
        .registerBuilder('readonly', function(tag, curJsdocNode) {
            curJsdocNode.isReadOnly = true;
        });
};
