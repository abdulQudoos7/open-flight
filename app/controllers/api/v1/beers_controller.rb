class Api::V1::BeersController < ApplicationController

  def index
    response = HTTParty.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    # @beers = Beer.get_json_data
    render json: { beers: JSON.parse(response.body) }
  end

end