class EventSerializer < ActiveModel::Serializer
  attributes :id, :description, :images, :logo, :country, :maxParticipants, :location
end
