module.exports = function(jsdoc) {
    jsdoc
        .registerParser('copyright', String)
        .registerBuilder('copyright', function(tag, curJsdocNode) {
            curJsdocNode.copyright = tag.content;
        });
};
