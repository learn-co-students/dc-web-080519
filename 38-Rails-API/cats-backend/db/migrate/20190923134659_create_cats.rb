class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name 
      t.integer :age 
      t.string :image 
      t.boolean :available
      t.timestamps
    end
  end
end
