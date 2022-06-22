class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password
end
