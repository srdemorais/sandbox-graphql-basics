import { v4 } from 'uuid'

const Mutation = {

    createUser(parent, args, { db }, info) {
        const emailTaken = db.users.some(user => user.email === args.data.email)

        if (emailTaken) {
            throw new Error('email already taken by an existing user!')
        }

        const user = {
            id: v4(),
            ...args.data
        }

        db.users.push(user)

        return user
    },

    deleteUser(parent, args, { db }, info) {
        const userIndex = db.users.findIndex( user => user.id === args.id )

        if (userIndex === -1) {
            throw new Error('User not found')
        }

        const deletedUsers = db.users.splice(userIndex, 1)

        db.posts = db.posts.filter( (post) => {
            const match = post.author === args.id 

            if (match) {
                db.comments = db.comments.filter(comment => comment.post !== post.id) 
            }

            return !match
        })

        db.comments = db.comments.filter(comment => comment.author !== args.id)
        
        return deletedUsers[0]
    },

    updateUser (parent, args, { db }, info) {
        const { id, data } = args

        const user = db.users.find( user => user.id === id )
        if (!user) {
            throw new Error ('User not found')
        }

        if (typeof data.email === 'string') {
            const emailTaken = db.users.some( user => user.email === data.email) 

            if (emailTaken) {
                throw new Error('email taken')
            }

            user.email = data.email
        }

        if (typeof data.name === 'string') {
            user.name = data.name
        }

        if (typeof data.age !== 'undefined') {
            user.age = data.age
        }

        return user
    },

    createPost(parent, args, { db, pubsub }, info) {
        const userExists = db.users.some( user => user.id === args.data.author)

        if (!userExists) {
            throw new Error('There is no author associated with the input id')
        }

        const post = {
            id: v4(),
            ...args.data
        }

        db.posts.push(post)

        if (post.published) {
            pubsub.publish('postCreation', {post: post})
        }

        return post
    },

    updatePost(parent, { id, data }, { db }, info) {
        const post = db.posts.find( post => post.id === id)

        if (!post) {
            throw new Error('Post not found!')
        }

        if (typeof data.title === 'string') {
            post.title = data.title
        }

        if (typeof data.body === 'string') {
            post.body = data.body
        }

        if (typeof data.published === 'boolean') {
            post.published = data.published
        }

        return post
    },

    deletePost(parent, args, { db }, info) {
        const postIndex = db.posts.findIndex( post => post.id === args.id )

        if (postIndex === -1) {
            throw new Error('Post does not exist')
        }

        const deletedPosts = db.posts.splice(postIndex, 1)

        db.comments = db.comments.filter(comment => comment.post !== args.id)

        return posts[0]
    },

    createComment(parent, args, { db, pubsub }, info) {
        const userExists = db.users.some(user => user.id === args.data.author)
        const postExists = db.posts.some(post => post.id === args.data.post)

        if (!userExists) {
            throw new Error ('Invalid author ID')
        }

        if (!postExists) {
            throw new Error ('Invalid post ID')
        }

        const comment = {
            id: v4(),
            ...args.data
        }

        db.comments.push(comment)

        pubsub.publish(`comment ${args.data.post}`, { comment })

        return comment
    },

    deleteComment(parent, args, { db }, info) {
        const commentIndex = db.comments.findIndex(comment => comment.id === args.id)

        if (commentIndex === -1) {
            throw new Error('No comment found')
        }

        const deletedComments = db.comments.splice(commentIndex, 1)
        
        return deletedComments[0]
    },

    updateComment(parent, {id, data}, { db }, info) {
        const comment = db.comments.find(comment => comment.id === id)

        if (!comment) {
            throw new Error('No comment found')
        }

        if (typeof data.text === 'string') {
            comment.text = data.text
        }
        
        return comment
    }
}

export { Mutation as default }