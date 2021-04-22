const { aliasDangerous, configPaths, CracoAliasPlugin } = require('react-app-rewire-alias/lib/aliasDangerous')

const aliasMap = configPaths('./tsconfig.paths.json')
module.exports = function override(config) {
    aliasDangerous({
        ...configPaths('tsconfig.paths.json')
    })(config)

    return config
}
