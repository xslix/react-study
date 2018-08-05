import * as React from 'react'
import {Post} from './Post'
import {PostList} from './PostList'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {render} from 'react-dom'

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Post} path="/:id" />
				<Route component={PostList} path="/" />
			</Switch>
		</Router>
	)
}

render(<App />, document.getElementById('root'))
