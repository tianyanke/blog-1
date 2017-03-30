defmodule Coral.MediumController do
	use Coral.Web, :controller
	alias Coral.MediumService

	def index(conn, %{"limit" => limit, "source" => source}) do
		case MediumService.index(limit, source) do
			{:ok, %HTTPoison.Response{status_code: status_code, body: body}} when status_code < 400 ->
				conn |> put_resp_content_type("javascript/json") |> text(String.slice(body, 16, 1..-1))
			{:ok, %HTTPoison.Response{status_code: status_code, body: body}} when status_code >= 400 ->
				conn |> put_status(500) |> put_resp_content_type("javascript/json") |> text(body)
			_ -> send_resp conn, 500, "internal error"
		end
	end

	def tag(conn, %{"name" => name}) do
		case MediumService.tag(name) do
			{:ok, %HTTPoison.Response{status_code: status_code, body: body}} when status_code < 400 ->
				conn |> put_resp_content_type("javascript/json") |> text(String.slice(body, 16, 1..-1))
			{:ok, %HTTPoison.Response{status_code: status_code, body: body}} when status_code >= 400 ->
				conn |> put_status(500) |> put_resp_content_type("javascript/json") |> text(body)
			_ -> send_resp conn, 500, "internal error"
		end
	end
end