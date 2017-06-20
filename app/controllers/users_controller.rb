class UsersController < ApplicationController
  autocomplete :user, :email

  def show
    @user = User.find(params[:user_id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end

private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :role, :company_name, :password)
  end

end
