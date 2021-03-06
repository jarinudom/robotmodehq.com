class RobotMode < Padrino::Application
  register ScssInitializer
  register Padrino::Mailer
  register Padrino::Helpers

  use Refraction

  ##
  # Application configuration options
  #
  # set :raise_errors, true     # Show exceptions (default for development)
  # set :public, "foo/bar"      # Location for static assets (default root/public)
  # set :reload, false          # Reload application files (default in development)
  # set :default_builder, "foo" # Set a custom form builder (default 'StandardFormBuilder')
  # set :locale_path, "bar"     # Set path for I18n translations (defaults to app/locale/)
  # enable  :sessions           # Disabled by default
  # disable :flash              # Disables rack-flash (enabled by default if sessions)
  # layout  :my_layout          # Layout can be in views/layouts/foo.ext or views/foo.ext (default :application)
  #

  ##
  # You can configure for a specified environment like:
  #
  #   configure :development do
  #     set :foo, :bar
  #     disable :asset_stamp # no asset timestamping for dev
  #   end
  #

  Refraction.configure do |req|

    if req.host == "www.robotmodehq.com"
      req.permanent! :host => "robotmodehq.com"  
    end

    if req.path == "/+"
      req.permanent! "https://plus.google.com/u/0/107677582398305727749"
    end

  end

  ##
  # You can manage errors like:
  #
  #   error 404 do
  #     render 'errors/404'
  #   end
  #
end
