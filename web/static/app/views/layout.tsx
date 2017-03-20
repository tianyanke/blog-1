import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../components/nav/nav'
import Main from './main/main'
import Reddit from './reddit/reddit'

import 'office-ui-fabric-react/dist/css/fabric.min.css'
import * as Style from './layout_style'


export default class RootLayout extends React.Component<void, void> {
	public render() {
		return (
			<div className={Style.CONTAINER}>
				<Nav />
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/reddit" component={Reddit} />
				</Switch>
			</div>
		)
	}
}
