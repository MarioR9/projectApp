class UserSerializer < ActiveModel::Serializer
  attributes :id, :platform
  has_many :events
end
