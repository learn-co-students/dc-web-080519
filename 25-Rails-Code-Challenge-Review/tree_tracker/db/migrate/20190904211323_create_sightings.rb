class CreateSightings < ActiveRecord::Migration[5.2]
  def change
    create_table :sightings do |t|
      t.string :city
      t.string :state
      t.integer :condition
      t.string :image
      t.references :user
      t.references :tree
      t.timestamps
    end
  end
end
