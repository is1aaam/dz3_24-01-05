const initialState = {
    user: {
        name: '',
        age: 0,
        gender: ''
    }
};

 export  const User = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};