source :rubygems

# Project requirements
gem 'rake'
gem 'rack-flash'
gem 'thin' # or mongrel

# Component requirements
gem 'haml'
gem 'dm-sqlite-adapter'
gem 'dm-postgres-adapter'
gem 'data_mapper'

# Padrino
gem 'padrino', "0.9.23"

group :development do
  gem 'heroku'
end

group :test do
  gem 'rspec'
  gem 'rack-test', :require => "rack/test"
end

group :production do
  gem 'pg'
end
