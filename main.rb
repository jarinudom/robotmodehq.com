# main.rb
require 'rubygems'
require 'sinatra'
require 'digest/md5'


# Remove trailing slash from URIs reaching Sinatra
before do
  request.env['PATH_INFO'].gsub!(/\/$/, '') if request.env['PATH_INFO'] != '/'
end

### CONTROLLER ACTIONS

# index
get '/' do
  haml :index
end

# Storekeeper page
get '/tools/shopkeeper' do
  "Storekeeper page"
end

# Storekeeper API key page
get '/tools/shopkeeper/auth' do
  @shop_url = params[:shop]
  @auth_key = params[:t]
  "Shop: #{@shop_url} - Password: #{Digest::MD5.hexdigest('3f97c04ac6bc2fa30b5d4f0144fc58a7' + @auth_key)}"
end

# stylesheet
get '/stylesheets/style.css' do
  response['Content-Type'] = 'text/css; charset=utf-8'
  sass :style
end
