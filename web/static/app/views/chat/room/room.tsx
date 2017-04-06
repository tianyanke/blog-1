import * as React from "react"
import { Label, TextField, List } from "office-ui-fabric-react"
import * as Style from "./room_style"

import { channel, push } from "../../../apis/chat_api"
import { TMessage } from "../../../types/chat_type"

type Props = {
	messages: TMessage[]
	user: string
}

export default class Room extends React.Component<Props, void> {
	private main: HTMLElement

	public componentDidUpdate(prevProps: Props) {
		if (this.props.messages.length !== prevProps.messages.length) {
			this.main.scrollTop = this.main.scrollHeight
		}
	}
	public render() {
		const messages = this.props.messages.map((message, index) =>
			<section key={index}>
				<Label style={{ display: "inline-block" }}>{message.user}</Label>
				<span>: {message.body}</span>
			</section>
		)
		return (
			<div className={Style.ROOM}>
				<main className={Style.LIST} ref={main => this.main = main}>{messages}</main>
				<footer className={Style.FOOTER}>
					<Label>{this.props.user}</Label>
					<TextField onKeyDown={this.onEnter} maxLength={20} />
				</footer>
			</div>
		)
	}

	private onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.keyCode === 13 && channel.canPush()) {
			push(this.props.user, event.currentTarget.value.trim())
		}
	}
}
