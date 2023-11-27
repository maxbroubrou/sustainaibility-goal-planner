class CreateProgresses < ActiveRecord::Migration[6.1]
  def change
    create_table :progresses do |t|
      t.string :entry_id, null: false
      t.belongs_to :goal, null: false, foreign_key: true
      t.datetime :entry_date
      t.decimal :achieved_reduction
      t.text :notes

      t.timestamps
    end
  end
end