import * as React from 'react'
import {Link} from 'react-router-dom'
import {getPosts} from './api'

function PostItem({post}) {
	const link = `/${post.id}`
	return (
		<li>
			<Link to={link}>{post.body}</Link>
		</li>
	)
}

export class PostList extends React.PureComponent {
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
					<PostItem key={post.id} post={post} />
				))}
			</ul>
		)
	}
}
