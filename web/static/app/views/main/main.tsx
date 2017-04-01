import * as React from "react"

import * as Style from "./main_style"

export default class Main extends React.Component<void, void> {
	public render() {
		return (
			<div className={Style.MAIN}>
				おかえりなさい
				<img src={require("./interesting.jpg")} />
			</div>
		)
	}
}
