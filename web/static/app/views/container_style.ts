import { style } from 'typestyle'
import { setupPage, normalize, fillParent, horizontal } from "csstips"

normalize()
setupPage('#root')

export const CONTAINER = style(fillParent, horizontal)