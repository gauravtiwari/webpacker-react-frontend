ruby '2.2.6'
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'puma', '~> 3.0'
gem 'rails', '~> 5.1.0.beta'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', github: 'rails/webpacker'
gem 'webpacker-react'

group :development do
  gem 'sqlite3'
end

group :development, :test do
  gem 'byebug', platform: :mri
end

group :production do
  gem 'heroku-deflater', github: 'romanbsd/heroku-deflater'
  gem 'pg'
  gem 'redis'
  gem 'rack-cors'
end

group :development do
  gem 'foreman'
  gem 'web-console', github: 'rails/web-console'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
