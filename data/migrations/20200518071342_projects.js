exports.up = function(knex) {
    return knex.schema
    .createTable('projects', project => {
      project.increments();
  
      project
        .string('name', 150)
        .notNullable()

      project.text('description')
        .notNullable();

      project.text('image')

      project.text('goal')
        .notNullable();

      project.string('category', 100)
    })
    
    .createTable('users_project', projects => {
        projects.primary(['project_id', 'user_id']);

      projects.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      projects.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      projects.integer('user_role')
        .notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users_project')
    .dropTableIfExists('projects')
  };
  