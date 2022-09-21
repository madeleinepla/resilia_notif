# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Notif.destroy_all

n1 = Notif.create!(
  title: 'title 1',
  body: 'body 1',
  seen: false
)

n2 = Notif.create!(
  title: 'title 2',
  body: 'body 2',
  seen: false
)

n3 = Notif.create!(
  title: 'title 3',
  body: 'body 3',
  seen: false
)