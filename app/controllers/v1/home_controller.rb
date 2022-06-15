module V1
  class HomeController < ApplicationController
    def index
      @messages = Message.find(Random.rand(1..5))
      render json: @messages
    end
  end
end
