class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :updated
    end

    def destory
        user = User.find(params[:id])
        user.destory
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :email, :admin, :password)
    end


end
