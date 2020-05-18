exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
  
      users
        .string('username', 128)
        .notNullable()
        .unique();

      users
        .string('password', 128)
        .notNullable();

      users
        .integer('premium')
        .notNullable()
    })

    .createTable('admins', admin => {
      admin.increments();

      admin
        .string('username', 128)
        .notNullable()
        .unique();

      admin
        .string('password', 128)
        .notNullable();

      admin
        .string('role', 50)
        .notNullable();
    })

    .createTable('investors', invest => {
      invest.primary(['project_id', 'investor_id']);

      invest.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      invest.integer('investor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      invest.text('amount')
        .notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('investors')
    .dropTableIfExists('admins')
    .dropTableIfExists('users')
  };
  