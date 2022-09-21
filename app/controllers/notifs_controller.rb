class NotifsController < ApplicationController
  def index
    # byebug
    @notifs = Notif.all
    render json: @notifs
    # render :index
  end

  def destroy
    @notif = Notif.find(params[:id])
    @notif.destroy
  end
end
