import { style } from 'typestyle'
import { flex, fillParent, horizontal } from 'csstips'

export const MESSAGES = style({
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
})

export const LIST = style(flex, fillParent)

export const LIST_ITEM = style(flex, horizontal, {
	margin: '10px 0'
})

export const LIST_AVATAR = style({
	width: '48px',
	height: '48px',
	marginRight: '10px',
	borderRadius: '50%'
})

export const LIST_CONTENT = style(flex, {
	$nest: {
		header: {
			color: '#666'
		},
		main: {
			height: '30px',
			lineHeight: '35px',
			color: '#333'
		}
	}
})
