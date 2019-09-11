class Tree < ApplicationRecord
    has_many :sightings
    has_many :users, through: :sightings
    validates :fact, length: {minimum: 30, allow_blank: true}
end
