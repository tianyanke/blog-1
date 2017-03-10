defmodule HelloPhoenix.SlackChannel do
  use Phoenix.Channel

  def join("slack:general", _message, socket) do
    {:ok, socket}
  end

#   # def handle_in("new_msg", %{"body" => body}, socket) do
#   #   broadcast! socket, "new_msg"
#   # end

end