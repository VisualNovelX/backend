const {insert, get} = require('./operations');

const sendErrorMessage = (res, status, message = 'Failed to process request!') =>
    (error) => {
        if (isNaN(status)) {
            message = status;
            status = 409;
        }
        console.error(message, error);
        return res.status(status).json({message});
    };

const create = (req, res) =>
    insert(req.body)
        .then(({postId}) => get(postId))
        .then(post => res.status(201).json({post}))
        .catch(sendErrorMessage(res, 'Failed to create post!'));

const find = (req, res) =>
    new Post(req.params)
        .fetch({require: true})
        .catch(Post.NotFoundError, sendErrorMessage(res, 404, 'Post not found!'))
        .catch(sendErrorMessage(res, 'Failed to find post!'));

const list = (req, res) => {
    return res.json({
        "posts": [
            {
                "date": "2018-06-14T06:06:21.105Z",
                "duration": "1 min",
                "illust": {
                    "artist": "loundraw",
                    "pixiv": "https://www.pixiv.net/member.php?id=772547",
                    "title": "少女は夜を綴らない",
                    "twitter": "https://twitter.com/loundraw",
                    "url": "/assets/63967458_p0_master1200.jpg"
                },
                "categories": ["vnxspotlight"],
                "title": "A young mystery impossible to read ahead, drawing a girl who plunges into a \"murder plan\"!",
                "author": {
                    "email": "brian@visualnovelx.com",
                    "image": "/assets/authors/sumi.jpg",
                    "instagram": "visualnovelx",
                    "name": "Sumi-chan",
                    "twitter": "visualnovelx"
                },
                "content": "Riko Yamane, third grade junior high school student who is confined to the obsession of \"It might hurt people\". She had a trauma of \"being killed\" in front of her classmate Kanako when he was in elementary school sixth grade. Kanako's younger brother / Yujin appeared one day before Riko who managed to calm herself by spelling it on a note named \"Night's Diary\" for \"Familiar Human Murder Plan\" and Riko who was sending school life somehow. Threatened to reveal the secret of Riko related to \"death of Kanako\", Riko will help plan to kill Hideo 's father. Riko who is attracted to the honor who can share the \"night diary\" who could not tell anyone, unavoidably thinking of the murder plan. Soon they will put the murder plan into action."
            }
        ]
    });
};

const update = (req, res) =>
    new Post(req.body.posts)
        .save(null, {method: 'update'})
        .then(posts => res.status(201).json({posts}))
        .catch(error => {
            console.error('Error updating post!');
            console.error(error);
            res.status(409).json({message: 'Error updating post!'});
        });

const remove = (req, res) => {
    return res.sendStatus(204);
};

module.exports = {create, find, list, update, remove};
