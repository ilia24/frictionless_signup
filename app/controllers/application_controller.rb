class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  def current_user
    if session[:user_id]
      return User.find(session[:user_id])
    end
  end

  def scrape_users
    agent = Mechanize.new
    page = agent.get('https://www.meetup.com/')
  end

  helper_method :current_user
end
