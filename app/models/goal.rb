class Goal < ApplicationRecord
    has_many :progresses, dependent: :destroy

    def current_progresses
        return 0 unless self.progresses.count.positive?
        self.progresses.sum(:achieved_reduction).round(2).to_f
    end
end
