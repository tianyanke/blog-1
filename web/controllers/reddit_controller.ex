defmodule Coral.RedditController do
	use Coral.Web, :controller
	alias Coral.RedditService

	@doc """
		get topic by channel_url, default "/r/javascript"
	"""
	def index(conn, %{"channel" => channel} = params) do
		case RedditService.listings "/r/" <> channel do
			{:ok, %HTTPoison.Response{status_code: status_code, body: body}} when status_code >= 400 ->
				send_resp conn, status_code, body
			{:ok, %HTTPoison.Response{status_code: status_code, body: body}} when status_code < 400 ->
				json conn, body
			_ -> send_resp conn, 500, "internal error"
		end
	end

end