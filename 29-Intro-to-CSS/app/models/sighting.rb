class Sighting < ApplicationRecord
    belongs_to :tree
    belongs_to :user
    # validates :condition, inclusion: 1..10
    validates :condition, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 10}
    accepts_nested_attributes_for :tree, reject_if: :all_blank

    # def image
    #     if self.image == ""
    #         self.image = "https://image.flaticon.com/icons/png/512/46/46564.png"
    #     end
    # end
end
