# defmodule Coral.Medium do
# 	use HTTPoison.Base

# 	def start_link() do
# 		:timer.apply_interval 3600 * 1000, __MODULE__, :refresh, []
# 	end

# 	def init do
# 		HTTPoison.get()
# 	end
# end