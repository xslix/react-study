import * as React from 'react'
import {Link} from 'react-router-dom'
import {compose, withProps} from 'recompose'
import {getPost} from './api'

class Post_ extends React.PureComponent {
	state = {
		post: null,
	}

	componentDidMount() {
		this.loadData()
	}

	async loadData() {
		const {id} = this.props
		const post = await getPost(id)
		this.setState({
			post,
		})
	}

	render() {
		const {post} = this.state
		if (post === null) {
			return 'Loading...'
		}

		return (
			<>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
				<p>
					<Link to="/">Go to list</Link>
				</p>
			</>
		)
	}
}

export const Post = compose(
	withProps(props => ({
		id: props.match.params.id,
	})),
)(Post_)
