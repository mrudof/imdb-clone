Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   get 'http://www.omdbapi.com/?:keyword', to: 'imdb#search'
   root to: 'imdb#index'
end
