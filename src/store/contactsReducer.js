import avatar01 from '../assets/1.jpg'
import avatar02 from '../assets/2.jpg'
import avatar03 from '../assets/3.jpg'
import avatar04 from '../assets/4.jpg'
import avatar05 from '../assets/5.jpg'
import avatar06 from '../assets/6.jpg'
import avatar07 from '../assets/7.jpg'
import avatar08 from '../assets/8.jpg'
import avatar09 from '../assets/9.jpg'
import avatar10 from '../assets/10.jpg'
const SET__CONTACTS = "SET__CONTACTS";

const defaultState = {
    contacts: [
        {
            id: 1,
            img: `${avatar01}`,
            alt: 'avatar',
            name: 'Manuel',
            data: '12 Feb 2019',
        },
        {
            id: 2,
            img: `${avatar02}`,
            alt: 'avatar',
            name: 'Alice',
        },
        {
            id: 3,
            img: `${avatar03}`,
            alt: 'avatar',
            name: 'John',
        },
        {
            id: 4,
            img: `${avatar04}`,
            alt: 'avatar',
            name: 'Paul',
        },
        {
            id: 5,
            img: `${avatar05}`,
            alt: 'avatar',
            name: 'Dominik',
        },
        {
            id: 6,
            img: `${avatar06}`,
            alt: 'avatar',
            name: 'Caroline',
        },
        {
            id: 7,
            img: `${avatar07}`,
            alt: 'avatar',
            name: 'Simon',
        },
        {
            id: 8,
            img: `${avatar08}`,
            alt: 'avatar',
            name: 'Ivan',
        },
        {
            id: 9,
            img: `${avatar09}`,
            alt: 'avatar',
            name: 'Rocky',
        },
        {
            id: 10,
            img: `${avatar10}`,
            alt: 'avatar',
            name: 'Lana',
        },
    ],
}

export default function contactsReducer (state = defaultState, action) {
    switch (action.type) {
        case SET__CONTACTS:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state
    }
}