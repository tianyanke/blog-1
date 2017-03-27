defmodule Coral.SlackController do
  use Coral.Web, :controller
  import Slack
  
  def index(conn, %{"latest" => latest, "channel" => channel}) do
    json conn, Slack.Web.Channels.history(channel, %{latest: latest})
  end

  def user(conn, _params) do
    json conn, Slack.Web.Users.list
  end

end