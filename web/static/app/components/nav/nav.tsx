import * as React from 'react'
import { Nav as Navv } from 'office-ui-fabric-react'

import { groups } from '../../config/nav_config'

export default class Nav extends React.Component<void, void> {
	render() {
		return (
			<Navv
				groups={groups}
				selectedKey="coral"
			/>
		)
	}
}
