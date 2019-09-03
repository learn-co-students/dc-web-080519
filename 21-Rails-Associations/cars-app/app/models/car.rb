class Car < ApplicationRecord
  belongs_to :dealership

  def print_banner
    "Make: #{self.make} || Model: #{self.model} || Mileage: #{self.mileage} "
  end
end
