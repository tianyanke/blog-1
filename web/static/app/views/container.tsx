import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from '../components/nav/nav'
import Main from './main/main'


export default class Container extends React.Component<any, any> {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Nav />
					<Route path="/" component={Main} />
				</div>
			</BrowserRouter>
		)
	}
}