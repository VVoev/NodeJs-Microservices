// type Mail{
//     subject: String
//     receiver: String
//     content: String
//     _id: String
// }

const mockmails = [
    {
        subject: 'My first email',
        receiver: 'test@abv.bg',
        content: 'just testing'
    },
    {
        subject: 'My second email',
        receiver: 'test2@abv.bg',
        content: 'ready for production'
    },
    {
        subject: 'My third email',
        receiver: 'third@abv.bg',
        content: 'ready for money'
    }
]

module.exports = {
    Query: {
        mails: () => mockmails,
        mail: (_, args) => mockmails[0]
    },
    Mutation: {
        mail: (_, args) => {
            mockmails[0] = args
            return args;
        }
    }
};