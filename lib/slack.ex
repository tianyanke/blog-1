defmodule SlackRtm do
  use Slack

  def handle_connect(slack, state) do
    IO.puts "Connected as #{slack.me.name}"
    {:ok, state}
  end

  def handle_event(message = %{type: "message"}, slack, state) do
    send_message("I got a message!", message.channel, slack)
    {:ok, state}
  end
  def handle_event(_, _, state), do: {:ok, state}

  def handle_info({:message, text, channel}, slack, state) do
    IO.puts "Sending your message, captain!"

    send_message(text, channel, slack)

    {:ok, state}
  end
  def handle_info(_, _, state), do: {:ok, state}
end
# C0PKC07FB
# Slack.Bot.start_link(SlackRtm, [], "xoxp-23657521238-23656714295-149276007156-ef111d68ac179b2f7d5b0517259f4be6")
#   @client_id "23657521238.148580628754")
# defmodule Slack do
#   import HTTPotion
#   @doc """
#     Slack service
#   """

#   @legacy_token "xoxp-23657521238-23656714295-149276007156-ef111d68ac179b2f7d5b0517259f4be6"
#   @client_id "23657521238.148580628754"
#   @client_secret "ef1ef622bda03a0a1621d53bc0e21833"
#   @authorize_url "https://slack.com/oauth/authorize"
#   @oauth_access_url "https://slack.com/api/oauth.access"
#   @scope "channels%3Ahistory+channels%3Aread"
  

#   def oauth_access() do
#     response = HTTPotion.get(@oauth_access_url, query: %{client_id: @client_id, client_secret: @client_secret, code: @legacy_token})
#   end

#   def authorize() do
#     response = HTTPotion.get(@authorize_url, query: %{client_id: @client_id, scope: @scope})
#   end

# end