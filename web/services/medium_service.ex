defmodule Coral.MediumService do

	@index_endpoint "https://medium.com/_/api/stream"
	@tag_endpoint "https://medium.com/tag/"
	@user_endpoint "https://medium.com/"

	def index(limit, source), do: HTTPoison.get @index_endpoint <> "?limit=" <> limit <> "&source=" <> source
	
  @doc """
		get topics by tag name
		eg: https://medium.com/tag/javascript
	"""
  def tag(slug), do: HTTPoison.get @tag_endpoint <> slug <> "?format=json"

	@doc """
		get latest topic of the specify username
	"""
	def user(name), do: HTTPoison.get @user_endpoint <> name <> "/latest?format=json"
end