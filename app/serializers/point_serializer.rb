class PointSerializer < ActiveModel::Serializer
  attributes :id, :point_total, :location_id, :user_id
end
