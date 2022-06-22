class User < ApplicationRecord
    has_many :location
    has_many :points
end
