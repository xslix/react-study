/* eslint-env node */

import * as React from 'react'
// import * as reducers from './store/reducers'
import {Post} from './Post'
import {PostList} from './PostList'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
// import store from './store'

import {hot} from 'react-hot-loader'
// import thunk from 'redux-thunk'

// import {applyMiddleware, combineReducers, createStore} from 'redux'

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
