defmodule Coral.RedditService do

  @doc """
		get topic by channel_url
	"""
  def listings(url), do: Coral.Reddit.get url
end