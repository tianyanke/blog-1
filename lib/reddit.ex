defmodule Coral.Reddit do
  # use GenServer
  use HTTPoison.Base

  @endpoint "https://oauth.reddit.com"
  @username Base.decode64("bGltUQ==") |> elem(1)
  @password Base.decode64("aGJqMTQ0MzUxMg==") |> elem(1)
  @client_id Base.decode64("QlpOQWtvWGpLcTB0ZHc=") |> elem(1)
  @secret Base.decode64("SU1wRFQ4TXp4bGFUODFXSWVhLTlFclRLc3ZF") |> elem(1)

  def start_link do
    table = :ets.new(:reddit, [:named_table, :set, :protected])
    body = HTTPoison.post("https://www.reddit.com/api/v1/access_token", {:form, [{:grant_type, "password"}, {:username, "limQ"}, {:password, "hbj1443512"}]}, [{"Authorization", "Basic " <> Base.encode64("BZNAkoXjKq0tdw:IMpDT8MzxlaT81WIea-9ErTKsvE")}])
          |> elem(1)
          |> Map.get(:body)
          |> Poison.decode
          |> elem(1)
    
    :ets.insert(table, {"token", body})
    # GenServer.start_link(__MODULE__, :ok, [])
  end

  def process_url(url) do
    @endpoint <> url
  end

  def process_request_headers(term) do
    %{"token_type" => token_type, "access_token" => access_token} = :ets.lookup(:reddit, "token") |> List.first |> elem(1)
    term ++ [{"Authorization", token_type <> " " <> access_token}]
  end

  # def init(_) do
  #   table = :ets.new(:reddit_token, [:named_table, :set, :protected])
  #   body = HTTPoison.post("https://www.reddit.com/api/v1/access_token", {:form, [{:grant_type, "password"}, {:username, "limQ"}, {:password, "hbj1443512"}]}, [{"Authorization", "Basic " <> Base.encode64("BZNAkoXjKq0tdw:IMpDT8MzxlaT81WIea-9ErTKsvE")}])
  #         |> elem(1)
  #         |> Map.get(:body)
  #         |> Poison.decode
  #         |> elem(1)

  #   :ets.insert(table, body）
  #   {:ok, body}
  # end
end
