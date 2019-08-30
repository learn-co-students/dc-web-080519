class CreateFlags < ActiveRecord::Migration[5.2]
  def change
    create_table :flags do |t|
      t.string :region
      t.string :info
      t.string :image_url
      t.integer :rating

      t.timestamps
    end
  end
end
