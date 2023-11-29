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
                progress = Progress.find_by(id: params[:id])

                if progress.nil?
                    render json: { error: "Progress not found" }, status: 404
                    return
                end

                if progress.destroy
                    head :no_content
                else
                    render json: { error: progress.errors.messages }, status: 422
                end            
            end
            
            private

            def progress_params
                params.require(:progress).permit(:goal_id, :entry_date, :achieved_reduction, :notes)
            end
        end
    end
end 