class NotifsController < ApplicationController
  def index
    # byebug
    @notifs = Notif.all
    render json: @notifs
    # render :index
  end

  def delete
    @notif = Notif.find(params[:id])
    @notif.destroy
  end
end
