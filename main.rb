# main.rb
require 'rubygems'
require 'sinatra'

### CONTROLLER ACTIONS

# index
get '/' do
  haml :index
end

# stylesheet
get '/stylesheets/style.css' do
  header 'Content-Type' => 'text/css; charset=utf-8'
  erb :style
end
