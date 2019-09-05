class User < ApplicationRecord
    has_many :sightings
    has_many :trees, through: :sightings
    validates :username, uniqueness: true
end
