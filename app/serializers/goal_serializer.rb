class GoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :goal_name, :target_reduction, :target_unit, :start_date, :end_date, :current_progresses

  has_many :progresses
end
