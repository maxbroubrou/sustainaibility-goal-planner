class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :goal_name
      t.decimal :target_reduction
      t.string :target_unit
      t.string :start_date
      t.string :end_date

      t.timestamps
    end
  end
end
