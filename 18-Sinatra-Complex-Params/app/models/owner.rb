class Owner < ActiveRecord::Base
  has_many :owners_pets
  has_many :pets, through: :owners_pets
end
