import * as React from 'react'
import {Link} from 'react-router-dom'
import {compose, withProps} from 'recompose'
import {getPost} from './api'
import {withLoading} from './hocs/withLoading'

const Post_ = ({loadingData: {title, body}}) => (
	<div>
		<h1>{title}</h1>
		<p>{body}</p>
		<p>
			<Link to="/">Go to List</Link>
		</p>
	</div>
)

const Loading = () => <div>Загрузка поста</div>
const Fail = () => <div>Ошибка загрузки</div>

export const Post = compose(
	withProps(props => ({
		id: props.match.params.id,
	})),
	withLoading(props => getPost(props.id), Loading, Fail),
)(Post_)
