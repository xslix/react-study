import * as React from 'react'
import {getPosts} from './api'

export class List extends React.PureComponent {
	state = {
		posts: null,
	}

	componentDidMount() {
		this.loadData()
	}

	async loadData() {
		const posts = await getPosts()
		this.setState({
			posts,
		})
	}

	render() {
		const {posts} = this.state
		if (posts === null) {
			return 'Loading...'
		}

		return (
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		)
	}
}
