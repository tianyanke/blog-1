defmodule Coral.Reddit do
  use HTTPoison.Base

  @endpoint "https://oauth.reddit.com"

  def start_link() do
    Agent.start_link fn -> init() end, name: :reddit
  end

  def process_url(url), do: @endpoint <> url

  def process_request_headers(term) do
    %{"token_type" => token_type, "access_token" => access_token} = Agent.get(:reddit, fn body -> body end)
    term ++ [{"Authorization", token_type <> " " <> access_token}]
  end

  def init do
    HTTPoison.post("https://www.reddit.com/api/v1/access_token", {:form, [{:grant_type, "password"}, {:username, "limQ"}, {:password, "hbj1443512"}]}, [{"Authorization", "Basic " <> Base.encode64("BZNAkoXjKq0tdw:IMpDT8MzxlaT81WIea-9ErTKsvE")}])
    |> elem(1)
    |> Map.get(:body)
    |> Poison.decode
    |> elem(1)
  end
end
