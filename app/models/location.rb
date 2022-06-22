class Location < ApplicationRecord
    belongs_to :user
    has_many :points, through: :users
end
