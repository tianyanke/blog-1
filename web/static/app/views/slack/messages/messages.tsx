import * as React from 'react'
import {
	FocusZone, FocusZoneDirection, List, TextField, Spinner, SpinnerType, Persona, PersonaSize, PersonaPresence
} from 'office-ui-fabric-react'

import * as Style from './message_style'

import { ISlackListType, ISlackUserType, ISlackMessage } from '../../../types/slack_type'

type Props = {
	user: ISlackUserType
	post: ISlackListType
}


export default class Messages extends React.Component<Props, void> {
	public render() {
		const user = this.props.user
		const post = this.props.post
		let mergedList
		if (user && post) {
			post.messages.map(message =>
				message.user = user.members.find(member => member.id === message.user as any)
			)
			mergedList = post
		}
		return (
			<FocusZone className={Style.MESSAGES} direction={FocusZoneDirection.vertical}>
				{mergedList && <List className={Style.LIST} items={mergedList.messages} onRenderCell={this.renderCell} />}
				{!mergedList && <Spinner type={SpinnerType.large} label="正在努力加载中..." />}
			</FocusZone>
		)
	}

	private renderCell = (item: ISlackMessage, index: number) => {
		return (
			<div className={Style.LIST_ITEM}>
				<img className={Style.LIST_AVATAR} src={item.user!.profile.image_48} />
				<div className={Style.LIST_CONTENT}>
					<header>{item.user!.name}</header>
					<main>{item.text}</main>
				</div>
			</div>
		)
	}
}
