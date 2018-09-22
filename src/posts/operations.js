const {Category, Post} = require('./model');

const insert = ({authorId, categories, content, duration, illustId, title}) =>
    new Post({authorId, content, duration, illustId, title})
        .save(null, {method: 'insert'})
        .tap(({id: postId}) =>
            categories
                .forEach(category =>
                    new Category({category, postId})
                        .save(null, {method: 'insert'})));

const get = postId =>
    new Post({postId})
        .fetch({withRelated: ['author', 'categories', 'illust', 'illust.artist']})
        .then(result => result.toJSON()[0]);

module.exports = {insert, get};
