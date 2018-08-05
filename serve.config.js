/* eslint-env node */

const convert = require('koa-connect')
const history = require('connect-history-api-fallback')

module.exports = {
	port: 3000,
	open: true,
	add: app => {
		app.use(convert(history()))
	},
}
