exports.seed = function(knex) {

  return knex('projects').insert([
    { title: 'NODE.JS - Multi Table Linking', image: 'images/dev-img.jpg', description: 'In this project I was tasked with creating a backend from scratch within 3 hours. The objective made use of many to many and many to one scenarios in which to test our mastery.', skills: 'NODE.JS, Knex, Express, Sqlite3, nodemon, helmet, dotenv, and cors', link: 'https://github.com/William-Ryan/node-db-challenge' }
  ])
};
