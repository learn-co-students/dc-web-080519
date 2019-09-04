class Dealership < ApplicationRecord
  has_many :cars
  accepts_nested_attributes_for(:cars)
end
