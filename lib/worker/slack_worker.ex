defmodule Holyjs.SlackWorker do
  import Slack
  
  def start_link() do
    Slack.Bot.start_link(SlackBot, [], Application.get_env(:slack, :api_token))
  end

  def handle_call(:pop, _from, [h | t]) do
    {:reply, h, t}
  end

  def handle_cast({:push, h}, t) do
    {:noreply, [h | t]}
  end

end