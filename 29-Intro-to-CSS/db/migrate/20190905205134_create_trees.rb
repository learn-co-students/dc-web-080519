class CreateTrees < ActiveRecord::Migration[5.2]
  def change
    create_table :trees do |t|
      t.string :common_name
      t.string :binomial_name
      t.string :id_image
      t.string :category
      t.string :fact

      t.timestamps
    end
  end
end
