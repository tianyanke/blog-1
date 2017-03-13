defmodule Coral.PageController do
  use Coral.Web, :controller
  
  def index(conn, _params) do
    render conn, "index.html"
  end

end