class CreateSightings < ActiveRecord::Migration[5.2]
  def change
    create_table :sightings do |t|
      t.string :city
      t.string :state
      t.integer :condition
      t.string :image
      t.integer :user_id
      t.integer :tree_id

      t.timestamps
    end
  end
end
