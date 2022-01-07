// Demo of Users data
const users = [
    {
        id: '1',
        name: 'Sergio',
        email: 'sergio@mail.com',
        age: 43
    },
    {
        id: '2',
        name: 'Sarah',
        email: 'sarah@mail.com'
    },
    {
        id: '3',
        name: 'Mike',
        email: 'mike@mail.com',
        age: 27
    }
]

// Demo of Post data
const posts = [
    {
        id: '1',
        title: 'Post #1',
        body: 'test01 Amet adipisicing velit exercitation officia ex in eu aliqua pariatur qui. Irure excepteur adipisicing sint est laborum proident do commodo pariatur aliquip excepteur. Cupidatat pariatur cupidatat laboris occaecat aliqua qui consequat cillum pariatur et. Nisi nulla eiusmod qui ipsum pariatur est deserunt est officia officia irure. Et non ad consequat ipsum sint. Elit fugiat reprehenderit ut ut id tempor sunt tempor. Tempor officia fugiat magna commodo nulla Lorem pariatur.',
        published: true,
        author: '1'
    },
    {
        id: '2',
        title: 'Post #2',
        body: 'test02 Nostrud adipisicing commodo nulla consectetur officia ad esse irure laboris irure nisi et. Quis eiusmod nostrud ex ad officia labore. Nisi officia pariatur amet irure eiusmod cupidatat et. Occaecat adipisicing cillum veniam ipsum quis laborum sint labore aliqua adipisicing eu tempor est. Ad occaecat incididunt mollit amet qui pariatur dolore sint aliqua et. Velit duis id occaecat sint id minim velit. Reprehenderit excepteur aliqua irure qui id eu ullamco ea esse pariatur eu.',
        published: false,
        author: '1'
    },
    {
        id: '3',
        title: 'Post #3',
        body: 'test03 Nisi irure non cillum sint occaecat Lorem proident. Sint non velit amet incididunt proident esse nostrud ullamco ad deserunt. Consectetur reprehenderit consequat commodo mollit officia officia ex anim aute dolor sint amet adipisicing. Ex Lorem consectetur ex excepteur non culpa non. Commodo dolor ex cillum quis ut aliqua magna mollit sunt ex laborum quis. Dolore nostrud eiusmod deserunt elit incididunt est est ex qui sit qui exercitation nostrud.',
        published: true,
        author: '2'
    },
    {
        id: '4',
        title: 'Post #4',
        body: 'test04 Nisi irure non cillum sint occaecat Lorem proident. Sint non velit amet incididunt proident esse nostrud ullamco ad deserunt. Consectetur reprehenderit consequat commodo mollit officia officia ex anim aute dolor sint amet adipisicing. Ex Lorem consectetur ex excepteur non culpa non. Commodo dolor ex cillum quis ut aliqua magna mollit sunt ex laborum quis. Dolore nostrud eiusmod deserunt elit incididunt est est ex qui sit qui exercitation nostrud.',
        published: true,
        author: '2'
    }
]

// Demo of Comments data
const comments = [
    {
        id: '1',
        text: 'Adipisicing culpa deserunt sunt sit exercitation laborum deserunt mollit.',
        author: '1',
        post: '1'
    },
    {
        id: '2',
        text: 'Magna labore amet ex id ea dolore ipsum laboris ut est ullamco officia dolore.',
        author: '1',
        post: '1'
    },
    {
        id: '3',
        text: 'Incididunt nisi aliquip fugiat in nostrud excepteur veniam nostrud.',
        author: '3',
        post: '2'
    }
]

const db = {
    users,
    posts,
    comments
}

export { db as default }