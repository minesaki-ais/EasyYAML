yaml = require('js-yaml');

function isValidYAML(yamlText) {
    try {
        const data = yaml.load(yamlText);
        console.log(data);
        return [true, data];
    } catch (e) {
        return [false, yamlText];
    }
}


module.exports = { isValidYAML };