import * as React from 'react'
import { Nav as Navv, INavLink } from 'office-ui-fabric-react'
import { Link } from 'react-router-dom'

import { groups } from '../../config/nav_config'
import * as Style from './nav_style'

export default class Nav extends React.Component<void, void> {
	private static contextTypes = {
		router: React.PropTypes.shape({
			history: React.PropTypes.shape({
				createHref: React.PropTypes.func.isRequired,
				push: React.PropTypes.func.isRequired,
				replace: React.PropTypes.func.isRequired
			}).isRequired
		}).isRequired
	}
	public context: {
		router: {
			history: {
				push: (url: string) => void
			}
		}
	}
	public render() {
		return (
			<Navv
				className={Style.NAV}
				groups={groups}
				selectedKey="coral"
				onLinkClick={this.linkClick}
			/>
		)
	}

	private linkClick = (event: React.MouseEvent<HTMLDivElement>, nav: INavLink) => {
		event.preventDefault()
		this.context.router.history.push(nav.url)
	}
}
