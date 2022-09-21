# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Notif.destroy_all

n1 = Notif.create!(
  title: 'You received a message!',
  body: 'From: Mary - "Hi User, I wanted to get back to you about..."',
  seen: false
)

n2 = Notif.create!(
  title: 'New Instructional Video Available',
  body: 'Your non-profit in your community. How to make the most of...',
  seen: false
)

n3 = Notif.create!(
  title: 'Update',
  body: 'Your paperwork was successfully filed. Here are the next steps...',
  seen: false
)

n4 = Notif.create!(
  title: 'Fund request',
  body: 'There are updates on your funding request. Click to see...',
  seen: false
)
