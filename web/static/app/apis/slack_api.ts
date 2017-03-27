import { Observable } from 'rxjs'
import { ISlackListType, ISlackUserType } from '../types/slack_type'

export const list = (channel: string, latest: number) =>
	Observable
		.ajax
		.get(`/slack?channel=${channel}&latest=${latest}`, { 'if-api': true })
		.map(response => response.response)

export const user = () =>
	Observable
		.ajax
		.get('/slack/user', { 'if-api': true })
		.map(response => response.response)