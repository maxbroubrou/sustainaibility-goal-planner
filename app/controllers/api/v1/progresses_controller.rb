module Api
    module V1
        class ProgressesController < ApplicationController
            protect_from_forgery with: :null_session
            skip_before_action :verify_authenticity_token
            
            def create
                progress = Progress.new(progress_params)

                if progress.save
                    render json: ProgressSerializer.new(progress).serialized_json
                else
                    render json: { error: progress.errors.messages }, status: 422
                end            
            end

            def destroy
                # goal = Goal.find_by(goal_id: params[:goal_id])
                # log entry_id to 
                Rails.logger.info "Info level message"
                Rails.logger.info params[:entry_id]
                puts params[:entry_id]
                puts "Hello World"
                progress = Progress.find_by(entry_id: params[:entry_id])

                if progress.destroy
                    head :no_content
                else
                    render json: { error: progress.errors.messages }, status: 422
                end            
            end
            
            private

            def progress_params
                params.require(:progress).permit(:entry_id, :goal_id, :entry_date, :achieved_reduction, :notes)
            end
        end
    end
end 