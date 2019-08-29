class AddCityColumnToOwners < ActiveRecord::Migration
  def change
    add_column :owners, :city, :string
  end
end
