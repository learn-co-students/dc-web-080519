class AddDealershipFkToCars < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :dealership_id, :integer
  end
end
