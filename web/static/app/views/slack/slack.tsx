import * as React from "react"
import Store, { lift, inject } from "meng"
import Messages from "./messages/messages"
import Title from "./title/title"
import TextInput from "./textinput/textinput"
import Users from "./users/users"
import Flex from "../../components/flex/flex"
import * as Style from "./slack_style"

import { list, user, connect } from "../../apis/slack_api"
import { ISlackListType, ISlackUserType, ISlackMessage } from "../../types/slack_type"

type Props = {
	newmsg: ISlackMessage[]
	user: ISlackUserType
	post: ISlackListType
	latest: string
}

const injectedList = (currentStore: Props, nextStore: Props) => {
	return currentStore.latest !== nextStore.latest
		? list("C0PKC07FB", nextStore.latest)
			.do(newPost => newPost.messages = nextStore.post.messages.concat(newPost.messages))
		: null
}

@inject(connect, "newmsg")
@inject(injectedList, "post")
@inject(user, "user")
@inject(() => list("C0PKC07FB", "0"), "post")
@lift({ latest: "0", newmsg: [] as ISlackMessage[] }, "Slack")
export default class Slack extends React.Component<Props, void> {
	public render() {
		return (
			<div className={Style.SLACK}>
				<Title />
				<TextInput />
				<Flex flexGrow={1} flexDirection={"row"}>
					<Messages newmsg={this.props.newmsg} post={this.props.post} user={this.props.user} latest={this.props.latest} />
					<Users user={this.props.user} />
				</Flex>
			</div>
		)
	}
}
