# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(platform: "Facebook", password: "test")
Event.create(title: "futbol el sabado", description: "se juega el sabado 5 vs 5 cancha de pasto sitentico", images: "image url here", logo: "logo url here", country: "Bolivia", maxParticipants: 20, location: "plaza sur", user_id: 1)
