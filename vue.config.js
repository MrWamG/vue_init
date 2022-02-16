const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	devServer: {
		port: '9091',
		proxy: {
			'/apis': {
				target: 'http://crm-dev.waakuu.com',
				changeOrigin: true,
				pathRewrite: {
					'^/apis': ''
				}
			}
		}
	},
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'vue cli4',
		}
	}
}