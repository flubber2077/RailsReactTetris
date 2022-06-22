class LocationsController < ApplicationController

    def index
        render json: Location.all
    end

    def show
        location = Location.find(params[:id])
        render json: location
    end

    def update
        location = Location.find(params[:id])
        location.update!(location_params)
        render json: location, status: :updated
    end

    private

    def location_params
        params.permit(:location_name)
    end
end
