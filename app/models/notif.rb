class Notif < ApplicationRecord
  validates :title, :body, presence: true
end
