class User < ApplicationRecord
    has_many :points
    has_many :locations, through: :points
end
