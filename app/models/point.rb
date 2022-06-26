class Point < ApplicationRecord
    belongs_to :users, optional: true
    belongs_to :locations, optional: true
end
