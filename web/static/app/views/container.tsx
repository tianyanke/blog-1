import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/nav/nav'
import Main from './main/main'
import Reddit from './reddit/reddit'

import "office-ui-fabric-react/dist/css/fabric.min.css"

import * as Style from './container_style'

export default class Container extends React.Component<any, any> {
	render() {
		return (
			<BrowserRouter>
				<div className={Style.CONTAINER}>
					<Nav />
					<Switch>
						<Route path="/" exact component={Main} />
						<Route path="/reddit" component={Reddit} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}