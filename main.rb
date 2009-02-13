# main.rb
require 'rubygems'
require 'sinatra'

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
get '/storekeeper' do
  "Storekeeper page"
end

# Storekeeper API key page
get '/storekeeper/auth' do
  @shop_url = params[:shop]
  @auth_key = params[:t]
  "Shop: #{@shop_url} - Key: #{@auth_key}"
end

# stylesheet
get '/stylesheets/style.css' do
  header 'Content-Type' => 'text/css; charset=utf-8'
  erb :style
end
