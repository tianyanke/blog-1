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

  # pipeline :game do
  #   plug :put_layout, {Coral.LayoutView, "game.html"}
  #   plug :put_view, Coral.PageView
  #   plug :accepts, ["html"]
  #   plug :fetch_session
  #   plug :fetch_flash
  #   plug :protect_from_forgery
  #   plug :put_secure_browser_headers
  # end

  scope "/", Coral do
    pipe_through :api

    get "/slack", SlackController, :index
    get "/slack/user", SlackController, :user

    get "/medium", MediumController, :index
    get "/medium/tag/:name", MediumController, :tag

    # get "/medium", MediumController, :tag

    scope "/reddit" do
      resources "/r/:channel", RedditController, only: [:index]
    end

    get "/*path", PageController, :index
    
  end

  # scope "/maplestory", Coral do
  #   pipe_through :game

  #   get "/maplestory", PageController, :game

  # end

end
