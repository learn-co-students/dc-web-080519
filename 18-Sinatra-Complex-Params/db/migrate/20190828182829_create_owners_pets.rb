class CreateOwnersPets < ActiveRecord::Migration
  def change
    create_table :owners_pets do |t|
      t.integer :owner_id
      t.integer :pet_id
    end
  end
end
