class Retailer < ApplicationRecord
    has_many :snacks

    def name_and_year
        return "#{self.name} (#{self.year_established})"
    end
end
