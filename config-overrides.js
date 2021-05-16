const { override, addLessLoader, disableEsLint, addTslintLoader } = require('customize-cra');
const { default: ESLintWebpackPlugin } = require('eslint-webpack-plugin');

module.exports = override(
	addLessLoader({
		// 这里可以添加less的其他配置
		lessOptions: {
   		// 根据自己需要配置即可~
    }
	})
);