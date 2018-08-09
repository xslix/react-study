import * as React from 'react'
import {Link} from 'react-router-dom'
import {getPosts} from './api'
import {withLoading} from './hocs/withLoading'

function PostItem({post}) {
	const link = `/${post.id}`
	return (
		<li>
			<Link to={link}>{post.body}</Link>
		</li>
	)
}

const _PostList = ({loadingData: posts}) => (
	<ul>
		{posts.map(post => (
			<PostItem key={post.id} post={post} />
		))}
	</ul>
)

const Loading = () => <div>Загрузка списка...</div>
const Fail = () => <div>Произошла ошибка. Попробуйте позднее</div>

export const PostList = withLoading(getPosts, Loading, Fail)(_PostList)
