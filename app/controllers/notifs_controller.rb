class NotifsController < ApplicationController
  def index
    @notifs = Notif.all
    render :index
  end
end
