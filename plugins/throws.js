module.exports = function(jsdoc) {
    jsdoc
        .registerParser('throws', function(comment) {
            var match = comment.match(/^(?:{([^}]+)}\s*)?(.*?)\s*$/);

            return {
                jsType : require('./util/js-type').parse(match[1]),
                description : match[2]
            };
        })
        .registerBuilder('throws', function(tag, curJsdocNode) {
            curJsdocNode.throws = {
                jsdocType : 'throws',
                description : tag.description,
                jsType : tag.jsType
            }
        });
};
