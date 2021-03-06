# frozen_string_literal: true

Rails.application.routes.draw do
  get 'static/index'

  namespace :v1, defaults: { format: 'json' } do
    resources :home, only: [:index]
  end

  root 'static#index'

  get '*page', to: 'static#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }
end
