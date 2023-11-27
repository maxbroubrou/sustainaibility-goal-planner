class ProgressSerializer
  include FastJsonapi::ObjectSerializer
  attributes :entry_id, :goal_id, :entry_date, :achieved_reduction, :notes
end
