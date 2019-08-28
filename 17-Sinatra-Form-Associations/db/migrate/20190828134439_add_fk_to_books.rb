class AddFkToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :author_id, :integer

    remove_column :books, :author

    # change_column(:author, :author_id, :integer)
  end
end
