module.exports = function(jsdoc) {
    jsdoc
        .registerParser('see', String)
        .registerBuilder('see', function(tag, curJsdocNode) {
            (curJsdocNode.see || (curJsdocNode.see = [])).push(tag.content);
        });
};
