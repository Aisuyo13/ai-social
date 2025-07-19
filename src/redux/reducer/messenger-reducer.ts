
const initialState = {
    AngJoli: {
        userName: 'AngJoli',
        text: 'loh',
        messages: [
            {
                from: 'You',
                text: 'Hello',
                time: '14:42',
                chatid: 1,
                answer: undefined
            },
            {
                from: 'AngJoli',
                text: 'Hi, who are you',
                time: '14:50',
                chatid: 2,
                answer: 1
            },
        ]
    },
    Jiraya: {
        userName: 'Jiraya',
        text: 'Hello, how are you',
        messages: [
            {
                from: 'Jiraya',
                text: 'Hello',
                time: '14:42',
                chatid: 1,
                answer: undefined
            },
            {
                from: 'Jiraya',
                text: 'I m sex Jiraya razvrat',
                time: '14:42',
                chatid: 2,
                answer: undefined
            },
            {
                from: 'You',
                text: 'Hello, i now',
                time: '14:42',
                chatid: 3,
                answer: undefined
            }
        ]
    }
};

const messengerReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        // case SEND_MESSAGE:
        default:
            return state
    }
}

export default messengerReducer


//Вы наблюдаете код величайшего програмиста в мире, если вам показалось что 
// он не идеален, то вы просто не понимаете его гениальности, даже он сам не понимает
// его гениальности, но он знает что он гениален, и это главное
// Если вы хотите стать таким же гениальным программистом, то просто копируйте этот код
// и не задавайте вопросов, просто верьте в себя и в свой код

//ps Таким же гениальным вы все равно не станете, но вы старались))