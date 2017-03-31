import * as React from "react"
import { lift, inject } from "meng"
import { FocusZone, FocusZoneDirection, List, TextField, Spinner, SpinnerType } from "office-ui-fabric-react"
import Space from "../../components/space/space"
import { list } from "../../apis/hacker_news_api"
import { IHNTopic } from "../../types/hn_type"
import { friendlyDate } from "../../utils/unix_time_to_date"
import * as Style from "./hacker_news_style"

const commentEndpoint = "https://news.ycombinator.com/item?id="

type Props = {
	posts: IHNTopic[]
}

@inject(() => list("newstories"), "posts")
@lift({ posts: null })
export default class Reddit extends React.Component<Props, void> {
	public render() {
		const posts = this.props.posts
		return (
			<FocusZone direction={FocusZoneDirection.vertical}>
				{!posts && <Spinner type={SpinnerType.large} label="正在努力加载中..." />}
				{posts && <List items={posts} onRenderCell={this.renderCell} />}
			</FocusZone>
		)
	}

	private renderCell = (item: IHNTopic, index: number) => {
		return (
			<div key={item.id} className={Style.LI}>
				<div className={Style.LI_NUM}>{index + 1}</div>
				<div className={Style.LI_UPS}>{item.score}</div>
				<div className={Style.LI_CONTENT}>
					<header className={Style.LI_CONTENT_HEADER}>
						<a href={item.url}>{item.title}</a>
					</header>
					<footer>
						post by {item.by}
						<Space />|<Space />
						{item.descendants}
						<Space />
						<a href={commentEndpoint + item.id}>comments</a>
						<Space />|<Space />
						{friendlyDate(item.time)}
					</footer>
				</div>
			</div>
		)
	}
}
