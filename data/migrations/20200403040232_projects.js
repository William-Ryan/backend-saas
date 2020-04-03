exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();

        tbl.string('title', 100).notNullable();

        tbl.text('image').notNullable();

        tbl.text('description').notNullable();

        tbl.text('skills').notNullable();

        tbl.text('link').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
};
