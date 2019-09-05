class Retailer < ApplicationRecord
    has_many :snacks
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :year_established, presence: true
    validate :year_established_must_be_valid,
        unless: Proc.new {|retailer| retailer.year_established.blank?}

    def year_established_must_be_valid
        if !(self.year_established > 1800 && self.year_established <= Date.today.year)
            self.errors.add(:year_established, "must be between 1800 & #{Date.today.year}")
        end
    end

    def name_and_year
        return "#{self.name} (#{self.year_established})"
    end


end
