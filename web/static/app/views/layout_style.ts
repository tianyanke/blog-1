import { style, cssRule } from 'typestyle'
import { setupPage, normalize, fillParent, horizontal } from 'csstips'

normalize()
setupPage('#root')

cssRule('a', {
	textDecoration: 'none'
})

export const CONTAINER = style(fillParent, horizontal)
