class V1::HomeController < ApplicationController
  def index
    @messages = Message.find(Random.rand(1..5))
    render json: @messages.message
  end
end
