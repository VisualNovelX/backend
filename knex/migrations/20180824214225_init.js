exports.up = knex =>
    knex.schema
        .createTable('artists', table => {
            table.integer('artist_id').primary().notNullable().unique();
            table.string('name').notNullable();
            table.string('instagram');
            table.string('twitter');
        })
        .createTable('authors', table => {
            table.integer('author_id').primary().notNullable().unique();
            table.string('name').notNullable();
            table.string('image');
            table.string('facebook');
            table.string('instagram');
            table.string('twitter');
        })
        .createTable('categories', table => {
            table.string('category');
            table.integer('post_id');
        })
        .createTable('illusts', table => {
            table.integer('illust_id').primary().notNullable().unique();
            table.integer('artist_id').notNullable();
            table.integer('post_id');
            table.string('thumbnail');
            table.string('url').notNullable();
        })
        .createTable('posts', table => {
            table.integer('post_id').primary().notNullable().unique();
            table.integer('author_id').notNullable();
            table.text('content').notNullable();
            table.dateTime('date').defaultTo(knex.fn.now());
            table.string('duration');
            table.integer('illust_id').notNullable().unique();
            table.string('title').notNullable().unique();
        });

exports.down = knex =>
    knex.schema
        .dropTable('artists')
        .dropTable('authors')
        .dropTable('categories')
        .dropTable('illusts')
        .dropTable('posts');
