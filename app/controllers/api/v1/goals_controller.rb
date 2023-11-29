module Api
    module V1
        class GoalsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                goals = Goal.all
                render json: GoalSerializer.new(goals, options).serialized_json
            end

            def show
                goal = Goal.find_by(id: params[:id])
                render json: GoalSerializer.new(goal, options).serialized_json
            end

            def create
                goal = Goal.new(goal_params)

                if goal.save
                    render json: GoalSerializer.new(goal).serialized_json
                else
                    render json: { error: goal.errors.messages }, status: 422
                end
            end
            
            def update
                goal = Goal.find_by(id: params[:id])

                if goal.nil?
                    render json: { error: "Goal not found" }, status: 404
                    return
                end

                if goal.update(goal_params)
                    render json: GoalSerializer.new(goal, options).serialized_json
                else
                    render json: { error: goal.errors.messages }, status: 422
                end
            end

            def destroy
                goal = Goal.find_by(id: params[:id])
                
                if goal.nil?
                    render json: { error: "Goal not found" }, status: 404
                    return
                end

                if goal.destroy
                    head :no_content
                else
                    render json: { error: goal.errors.messages }, status: 422
                end
            end

            private

            def goal_params
                params.require(:goal).permit(:id, :goal_name, :target_reduction, :target_unit, :start_date, :end_date)
            end

            def options
                @options ||= { include: %i[progresses] }
            end
        end
    end
end 