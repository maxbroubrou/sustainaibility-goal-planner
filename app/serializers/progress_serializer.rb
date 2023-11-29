class ProgressSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :goal_id, :entry_date, :achieved_reduction, :notes
end
