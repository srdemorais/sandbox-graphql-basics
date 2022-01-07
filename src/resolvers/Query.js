const Query = {

    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        }

        return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
    },

    posts(parent, args, { db }, info) {
        if ( !args.query ) {
            return db.posts
        }

        return db.posts.filter( post => post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase()) )
    },

    comments(parent, args, { db }, info) {
        return db.comments
    },

    post() {
        return {
            id: '123456',
            title: 'My first post',
            body: 'This is a dummy text for filling the body of a fake post...',
            published: true
        }
    },

    me() {
        return {
            id: '123456',
            name: 'Sergio',
            email: 'sergio@mail.com',
            age: null
        }
    }
}

export { Query as default }