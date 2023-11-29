class CreateProgresses < ActiveRecord::Migration[6.1]
  def change
    create_table :progresses do |t|
      t.belongs_to :goal, null: false, foreign_key: true, foreign_key: { on_delete: :cascade }
      t.datetime :entry_date
      t.decimal :achieved_reduction
      t.text :notes

      t.timestamps
    end
  end
end