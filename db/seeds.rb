# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

# airlines = Airline.create([
#   {
#     name: "United Airlines",
#     image_url: "https://www.airport-technology.com/wp-content/uploads/sites/14/2020/04/Airlines.jpg"
#   },
#   {
#     name: "southWest Airlines",
#     image_url: "https://www.airport-technology.com/wp-content/uploads/sites/14/2020/04/Airlines.jpg"
#   },
#   {
#     name: "Qatar Airlines",
#     image_url: "https://www.airport-technology.com/wp-content/uploads/sites/14/2020/04/Airlines.jpg"
#   },
#   {
#     name: "jetBlue Airlines",
#     image_url: "https://www.airport-technology.com/wp-content/uploads/sites/14/2020/04/Airlines.jpg"
#   },
#   {
#     name: "PIA",
#     image_url: "https://www.airport-technology.com/wp-content/uploads/sites/14/2020/04/Airlines.jpg"
#   },
#   {
#     name: "Delta Airlines",
#     image_url: "https://www.airport-technology.com/wp-content/uploads/sites/14/2020/04/Airlines.jpg"
#   }
# ])

# reviews = Review.create([
#   {
#     title: "good airline",
#     description: "I had a lovely time",
#     score: 4,
#     airline: airlines.first
#   },
#   {
#     title: "bad airline",
#     description: "I had a bad time",
#     score: 1,
#     airline: airlines.first
#   },
#   {
#     title: "exellent airline",
#     description: "I had a exellent time",
#     score: 5,
#     airline: airlines.first
#   },
#   {
#     title: "average airline",
#     description: "mmmm its not bad..",
#     score: 3,
#     airline: airlines.first
#   }
# ])

Beer.create(brand: 'Double Stout', tagline: 'Stout', first_brewed: 'England', abv: 54)
Beer.create(brand: 'Spaten', tagline: 'Helles', first_brewed: 'Germany', abv: 3)
Beer.create(brand: 'Newcastle', tagline: 'Brown ale', first_brewed: 'UK', abv: 12)