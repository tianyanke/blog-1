defmodule Holyjs.Plugs.CheckHeadApi do
  use Holyjs.Web, :plug
  import Plug.Conn

  def init(options), do: options

  def call(%Plug.Conn{req_headers: %{"if-api" => is_api}} = conn, _opts) do
    IO.puts(111)
    if is_api, do: conn |> render("index") |> halt
  end

  def call(conn, _opts), do: conn

end