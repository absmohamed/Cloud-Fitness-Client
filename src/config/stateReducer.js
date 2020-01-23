export default function (state, action) {
    switch (action.type) {
        case "setLoggedInUser": {
            return {
                ...state,
                setLoggedInUser: action.data
            }
        }
        case "setBookings": {
            return {
                ...state,
                bookings: action.data
            }
        }
        default:
            return state
    }
       
}
