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

const PostList_ = ({loadingData: posts}) => (
	<div>
		<ul>
			{posts.map(post => (
				<PostItem key={post.id} post={post} />
			))}
		</ul>
	</div>
)

const Loading = () => <div>Загрузка списка...</div>
const Fail = () => <div>Ошибка загрузки.</div>

export const PostList = withLoading(getPosts, Loading, Fail)(PostList_)
