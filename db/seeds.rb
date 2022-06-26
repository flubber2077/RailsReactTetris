# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Point.destroy_all
Location.destroy_all


users = User.create([{username: "kate", password: "12345", admin: false}, {username: "dylan", admin: false}])

10.times do
    User.create!(
        username: Faker::Name.unique.first_name,
        admin: false
        )
end

puts "done seeding users"

8.times do
    Location.create!(
        location_name: Faker::Address.unique.city
    )
end

puts "done seeding locations"

30.times do
    Point.create!(
        point_total: Faker::Number.between(from: 0, to: 4000),
        user_id: Faker::Number.between(from: 1, to: 10),
        location_id: Faker::Number.between(from: 1, to: 8)
    )
end

puts "done seeding points"