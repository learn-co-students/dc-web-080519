class Hobby < ApplicationRecord
    has_many :cats, through: :cat_hobbies
    has_many :cat_hobbies
end
