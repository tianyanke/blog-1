import * as React from "react"
import * as Emoji from "../../components/emotion"

import * as Style from "./main_style"

export default class Main extends React.Component<void, void> {
	public render() {
		return (
			<div className={Style.MAIN}>おかえりなさい<Emoji.Interesting />
				Chrome有bug，socket连不上，slack实时消息和聊天室无法使用。除非你换火狐😂
			</div>
		)
	}
}
