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
get '/tools/storekeeper' do
  "Storekeeper page"
end

# Storekeeper API key page
get '/tools/storekeeper/auth' do
  @shop_url = params[:shop]
  @auth_key = params[:t]
  "Shop: #{@shop_url} - Password: #{Digest::MD5.hexdigest('1dc39ab1fb79c7f0a7295954929e0598' + @auth_key)}"
end

# stylesheet
get '/stylesheets/style.css' do
  header 'Content-Type' => 'text/css; charset=utf-8'
  erb :style
end
