defmodule Holyjs.Router do
  use Holyjs.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Holyjs do
    pipe_through :api # Use the default api stack

    resources "/slack", SlackController
    
  end

  # Other scopes may use custom stacks.
  # scope "/api", Holyjs do
  #   pipe_through :api
  # end
end
