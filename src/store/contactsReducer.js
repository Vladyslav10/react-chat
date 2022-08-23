const SET__SELECTED_USER = "SET__ID";
const SET__LAST_MESSAGE = "SET__LAST_MESSAGE";

const defaultState = {    
    selectedUser: [],
    lastMessage: '',
}

export default function contactsReducer (state = defaultState, action) {
    switch (action.type) {
        case SET__SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload
            }
        case SET__LAST_MESSAGE:
            return {
                ...state,
                lastMessage: action.payload
            }
        default:
            return state
    }
}

export const setSelectedUser = (id) => ({type:SET__SELECTED_USER, payload:id})
export const setLastMessage = (array) => ({type:SET__LAST_MESSAGE, payload:array})