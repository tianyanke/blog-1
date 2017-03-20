import { style } from 'typestyle'
import { flex, horizontal } from 'csstips'

export const LI = style(flex, horizontal, {})

export const LI_UPS = style({
	marginRight: '10px',
	fontSize: '21px',
	lineHeight: 1
})

export const LI_NUM = style({
	width: '40px',
	textAlign: 'center',
	color: '#d3d3d3'
})