/* eslint-env node */

import * as React from 'react'
import {Post} from './Post'
import {PostList} from './PostList'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {hot} from 'react-hot-loader'

function App_() {
	return (
		<Router>
			<Switch>
				<Route component={Post} path="/:id" />
				<Route component={PostList} path="/" />
			</Switch>
		</Router>
	)
}

export const App = hot(module)(App_)
