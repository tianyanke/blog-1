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
    plug :put_view, Holyjs.PageView
    plug Holyjs.CheckHeadApiPlug
    plug :accepts, ["json"]
  end

  scope "/", Holyjs do
    pipe_through :api

    resources "/slack", SlackController

    get "/*path", PageController, :index
    
  end

end
