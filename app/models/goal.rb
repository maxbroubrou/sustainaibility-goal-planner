class Goal < ApplicationRecord
    has_many :progresses
    # has_many :progresses, foreign_key: 'id'
    # has_many :progresses, foreign_key: 'goals_id'

    def current_progresses
        return 0 unless self.progresses.count.positive?
        self.progresses.average(:achieved_reduction).round(2).to_f
    end
end
