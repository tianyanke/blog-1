import * as React from 'react'
import { lift, inject } from 'meng'
import { FocusZone, FocusZoneDirection, List, TextField, Spinner, SpinnerType } from 'office-ui-fabric-react'
import { list } from '../../apis/reddit_api'
import { IRedditType, IRedditListType } from '../../types/reddit_type'
import * as Style from './reddit_style'

type Props = {
	posts: IRedditType
}

@inject(list, 'posts')
@lift({ posts: null })
export default class Reddit extends React.Component<Props, void> {
	public render() {
		const list = this.props.posts ? this.props.posts.data.children.slice(2) : null
		return (
			<FocusZone direction={FocusZoneDirection.vertical}>
				<TextField defaultValue="/r/javascript" label="频道" />
				{!list && <Spinner type={SpinnerType.large} label="正在努力加载中..." />}
				{list && <List items={list} onRenderCell={this.renderCell} />}
			</FocusZone>
		)
	}

	private renderCell = (item: IRedditListType, index: number) => {
		return (
			<div className={Style.LI}>
				<div className={Style.LI_NUM}>{index + 1}</div>
				<div className={Style.LI_UPS}>{item.data.ups}</div>
				<div>
					<header>
						<a href={item.data.url}>{item.data.title}</a>
						<a href={'https://www.reddit.com/domain/' + item.data.domain}>{item.data.domain}</a>
					</header>
					<footer>{item.data.author} | {item.data.num_comments} | NaN小时前</footer>
				</div>
			</div>
		)
	}
}
