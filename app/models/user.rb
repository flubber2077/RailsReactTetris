class User < ApplicationRecord
    has_many :locations
    has_many :points, through: :locations
end
