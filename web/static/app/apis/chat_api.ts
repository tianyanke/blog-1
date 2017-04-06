import { socket } from "../socket/socket"
import { Observable } from "rxjs"

export const channel = socket.channel("chat:lobby", {})

export const push = (user: string, body: string) => channel.push("new:msg", { user, body })

export const connect = (user: string) => new Observable(observer => {
	channel.join()
		.receive("ok", resp => console.info("已连接聊天室"))
		.receive("error", resp => observer.error(resp.response))
	channel.on("new:msg", payload => observer.next(payload))
	return () => channel.leave()
})
	.scan((acc: Array<object>, x) => [...acc, x], [])
