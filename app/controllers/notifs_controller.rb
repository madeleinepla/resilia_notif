class NotifsController < ApplicationController

  def index
    @notifs = Notif.all
    render json: @notifs
  end

  def destroy
    @notif = Notif.find(params[:id])
    @notif.destroy
  end
end
