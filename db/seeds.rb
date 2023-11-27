# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

goals = Goal.create([
    {
        goal_id: 'G001',
        goal_name: 'Reduce Carbon Emissions',
        target_reduction: 1000,
        target_unit: 'kg CO2',
        start_date: '2023-01-01',
        end_date: '2023-12-31'
    },
    {
        goal_id: 'G002',
        goal_name: 'Increase Energy Efficiency',
        target_reduction: 500,
        target_unit: 'kWh',
        start_date: '2023-01-01',
        end_date: '2023-12-31'
    }
])

progress = Progress.create([
    {   
        entry_id: 'E001',
        goal_id: 1,
        entry_date: '2023-05-15',
        achieved_reduction: 25,
        notes: 'Implemented in office areas.'
    },
    {
        entry_id: 'E002',
        goal_id: 2,
        entry_date: '2023-06-20',
        achieved_reduction: 100,
        notes: 'Installed solar panels on the roof.'
    }
])

