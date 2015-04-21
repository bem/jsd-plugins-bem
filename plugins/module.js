module.exports = function(jsdoc) {
    jsdoc
        .registerParser('module', String)
        .registerBuilder('module', function(tag, curJsdocNode) {
            var modules = curJsdocNode.modules || (curJsdocNode.modules = []),
                moduleNode;

            modules.some(function(module) {
                var res = module.name === tag.content;
                if(res) delete (moduleNode = module).exports;
                return res;
            }) || modules.push(
                (this.modules || (this.modules = {}))[tag.content] =
                    moduleNode = { jsdocType: 'module', name: tag.content });

            return this.currentModule = moduleNode;
        })
        .registerPostprocessor(function(jsdocNode, postprocess) {
            var classes = this.classes;
            classes && require('./util/js-type').iterate(
                jsdocNode.jsType,
                function(jsType) {
                    if(classes.hasOwnProperty(jsType)) {
                        var curModule = this.currentModule;
                        postprocess(
                            (curModule.classes || (curModule.classes = {}))[jsType] = classes[jsType]);
                    }
                }, this);
        });
};
