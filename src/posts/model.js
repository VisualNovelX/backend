const bookshelf = require('../../bookshelf');

const Author = bookshelf.Model.extend({
    tableName: 'authors',
    idAttribute: 'author_id',
    posts() {
        return this.hasMany(Post);
    }
});

const Category = bookshelf.Model.extend({
    tableName: 'categories',
    post() {
        return this.belongsToMany(Post);
    }
});

const Illust = bookshelf.Model.extend({
    tableName: 'illusts',
    idAttribute: 'illust_id',
    post() {
        return this.belongsTo(Post);
    }
});

const Post = bookshelf.Model.extend({
    tableName: 'posts',
    idAttribute: 'post_id',
    author() {
        return this.belongsTo(Author);
    },
    categories() {
        return this.hasMany(Category, 'category');
    },
    illust() {
        return this.hasOne(Illust);
    }
});

module.exports = {Post};
