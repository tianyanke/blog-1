defmodule Holyjs.SlackWorker do
  import Slack
  
  def start_link() do
    Slack.Bot.start_link(SlackBot, [], Application.get_env(:slack, :api_token))
  end
end