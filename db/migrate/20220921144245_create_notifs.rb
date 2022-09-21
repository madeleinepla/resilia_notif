class CreateNotifs < ActiveRecord::Migration[5.2]
  def change
    create_table :notifs do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :seen, null: false
      
      
      t.timestamps
    end
  end
end
