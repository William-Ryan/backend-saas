exports.up = function(knex) {
    return knex.schema.createTable('admin', admin => {
      admin.increments();
  
      admin
        .string('username', 255)
        .notNullable()
        .unique();

      admin
        .string('password', 255)
        .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('admin');
  };
  