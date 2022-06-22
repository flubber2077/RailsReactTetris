class PointsController < ApplicationController

    def index
        render json: Point.all
    end

    def show
        point = Point.find(params[:id])
        render json: point, include: [:user, :location]
    end

    def update
        point = Point.find(params[:id])
        point.update!(point_params)
        render json: point, status: :update
    end

    private

    def point_params
        params.permit(:points_total)
    end


end
