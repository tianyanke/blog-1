import * as React from 'react'
import { lift, inject } from 'meng'
import { list } from '../../apis/reddit_api'

@inject(list, 'posts')
@lift()
export default class Reddit extends React.Component<any, void> {
	public render() {
		return (
			<div>Reddit</div>
		)
	}
}

