class Pet < ActiveRecord::Base
  has_many :owners_pets
  has_many :owners, through: :owners_pets
end
