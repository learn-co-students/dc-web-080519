class CreateAuthorsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |table|
      table.string :name
    end 
  end
end
