defmodule Holyjs.PageController do
  use Holyjs.Web, :controller
  
  def index(conn, _params) do
    render conn, "index.html"
  end

end