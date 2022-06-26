# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{username: "kate", password: "12345" admin: false}, {username: "dylan", admin: false}])

locations = Location.create([{location_name: "Ypsilanti, MI"}, {location_name: "Athens, GA"}, {location_name: "Chapel Hill, NC"}])

points = Point.create([
    {point_total: 7, user_id: 1, location_id: 1}, {point_total: 13, user_id: 2, location_id: 2},{point_total: 5, user_id: 1, location_id: 1},{point_total: 3, user_id: 2, location_id: 3},{point_total: 23, user_id: 2, location_id: 2}
])