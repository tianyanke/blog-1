defmodule Holyjs.SlackController do
  use Holyjs.Web, :controller
  import Slack
  
  def index(conn, %{"latest" => latest, "channel" => channel}) do

    history = Slack.Web.Channels.history(channel, %{latest: latest})
    json conn, history
  end

end