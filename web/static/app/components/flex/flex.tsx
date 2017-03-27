import * as React from 'react'
import { style } from 'typestyle'

type Props = {
	flex?: string
	flexAlign?: 'center'
	flexBasis?: number
	flexDirection?: 'row' | 'column'
	flexGrow?: number
	flexWrap?: 'wrap' | 'nowrap'
}

export default class Flex extends React.Component<Props, void> {
	public render() {
		return <div className={style({ display: 'flex', ...this.props, children: null })}>{this.props.children}</div>
	}
}
