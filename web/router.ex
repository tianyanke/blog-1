defmodule Coral.Router do
  use Coral.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :put_layout, {Coral.LayoutView, "app.html"}
    plug :put_view, Coral.PageView
    plug Coral.CheckHeadApiPlug
    plug :accepts, ["json"]
  end

  scope "/", Coral do
    pipe_through :api

    get "/slack", SlackController, :index
    get "/slack/user", SlackController, :user

    scope "/reddit" do
      resources "/r/:channel", RedditController, only: [:index]
    end

    get "/", PageController, :index
    
  end

end
