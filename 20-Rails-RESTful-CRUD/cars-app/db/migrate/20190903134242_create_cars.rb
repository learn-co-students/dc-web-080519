class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :mileage
      t.integer :seats
      t.timestamps
    end
  end
end
