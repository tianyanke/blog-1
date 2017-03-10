defmodule Holyjs.SlackController do
  use Holyjs.Web, :controller
  import Slack
  
  def index(conn, %{"latest" => latest, "channel" => channel}) do
    json conn, Slack.Web.Channels.history(channel, %{latest: latest})
  end

end