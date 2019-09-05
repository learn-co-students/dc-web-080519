class Sighting < ApplicationRecord
    belongs_to :user
    belongs_to :tree
    accepts_nested_attributes_for :tree, reject_if: :all_blank
    validates_presence_of :city, :state, :condition
    validates :condition, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 10}
    validates :state, inclusion: ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]

    def self.state_codes
        ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
    end
end
