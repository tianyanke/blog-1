import * as React from "react"
import Store from "meng"
import { Spinner, SpinnerType } from "office-ui-fabric-react"
import Scroller from "react-iscroller"

import * as Style from "./message_style"

import { ISlackListType, ISlackUserType, ISlackUserMessage, ISlackBotMessage } from "../../../types/slack_type"

type Props = {
	newmsg: Array<ISlackUserMessage & ISlackBotMessage>
	user: ISlackUserType
	post: ISlackListType
	latest: string
}

export default class Messages extends React.Component<Props, void> {
	public render() {
		const newmsg = this.props.newmsg
		const user = this.props.user
		const post = this.props.post
		const mergedList = user && post && newmsg.concat(post.messages).map(message => {
			const userinfo = message.user ? user.members.find(member => member.id === message.user) : {
				name: message.username,
				profile: {
					image_48: message.icons.image_48
				}
			}
			return (
				<div key={message.ts} className={Style.LIST_ITEM}>
					<img className={Style.LIST_AVATAR} src={userinfo!.profile.image_48} />
					<div className={Style.LIST_CONTENT}>
						<header>{userinfo!.name}</header>
						<main>{message.text}</main>
					</div>
				</div>
			)
		})
		return (
			<div className={Style.MESSAGES}>
				<Scroller onEnd={this.onEnd}>{mergedList}</Scroller>
				{!mergedList && <Spinner type={SpinnerType.large} label="正在努力加载中..." />}
			</div>
		)
	}

	private onEnd = () => {
		if (this.props.post.has_more) {
			const messages = this.props.post.messages
			const latest = messages[messages.length - 1].ts
			Store.children.Slack.setState({ latest })
		}
	}
}
