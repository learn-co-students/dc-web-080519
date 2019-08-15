class ReallyRemovePennameColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :authors, :penname, :string
  end
end
