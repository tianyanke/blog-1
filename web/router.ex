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
    pipe_through [Holyjs.Plugs.CheckHeadApi, :api] # Use the default api stack

    get "/", PageController, :index

    resources "/slack", SlackController
    
  end

end
