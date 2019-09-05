class Tree < ApplicationRecord
    has_many :sightings
    has_many :users, through: :sightings
    validates_presence_of :common_name, :binomial_name, :leaf_image, :category
    validates :category, :inclusion => %w(deciduous evergreen)
    # validates :etymological_fact, length: { minimum: 30, too_uninteresting: "NOT INTERESTING ENOUGH", allow_blank: true}
    validate :two_words
    validate :interesting?

    private

    def two_words
        if binomial_name.split.length != 2
            errors.add(:wrong_length, "A binomial name should be two words long.")
        end
    end

    def interesting?
        errors.add(:too_uninteresting, "NOT INTERESTING ENOUGH") if (etymological_fact && etymological_fact.length < 30)
    end

end
