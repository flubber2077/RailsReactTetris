class Point < ApplicationRecord
    belongs_to :users
    belongs_to :locations
end
