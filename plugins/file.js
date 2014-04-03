module.exports = function(jsdoc) {
    jsdoc
        .registerParser('file', String)
        .registerBuilder('file', function(tag, curJsdocNode) {
            var fileNode = {
                    jsdocType : 'file',
                    description : tag.content
                };
            (curJsdocNode.files || (curJsdocNode.files = [])).push(fileNode);
            return fileNode;
        });
};
