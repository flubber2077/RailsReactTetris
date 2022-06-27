class PointsController < ApplicationController

    def index
        render json: Point.all, include: [:user]
    end

    def show
        point = Point.find(params[:id])
        render json: point, include: [:user, :location]
    end

    def create
        point = Point.create!(point_params)
        render json: point, status: :created
    end

    def update
        point = Point.find(params[:id])
        point.update!(point_params)
        render json: point, status: :update
    end

    private

    def point_params
        params.permit(:point_total, :user_id, :location_id)
    end


end
