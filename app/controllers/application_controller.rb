class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  def current_user
    if session[:user_id]
      return User.find(session[:user_id])
    end
  end

  def scrape_users

    # P1: Takes all the popular meetup groups on the homepage & stashes them in an array
    agent = Mechanize.new
    page = agent.get 'http://www.meetup.com'
    meetup_links = []

    page.links.select{|link| link.href[/events/]}.each do |eventlink|
      url = eventlink.href
      url.gsub!(/(\/events\/).+/, "/members/" )
      meetup_links << url
    end



  end

  helper_method :current_user
end
