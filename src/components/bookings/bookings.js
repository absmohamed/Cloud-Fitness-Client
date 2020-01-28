// I think you may need this where you add the bookingAction.js as functions to the api calls,
//as the  functions are needed for the form the form has it 
//so not sure if in this file or api file
import React from 'react';
import qs from 'qs'
import Booking from './booking'
import {getSingleBooking, getFilteredBookings} from '../../actions/bookingActions';


function haveQueryParameters(queryObj) {
    return Object.keys(queryObj).length > 0
}
function haveSingleBooking(bookings) {
    return bookings.length === 1
}

const Bookings =  (props) => {
    const { match, location, bookings} = props
    const id = match.params.id
    const queryObj = qs.parse(location.search, { ignoreQueryPrefix: true})

    //Unless we are retrieving a single booking, post all bookings (retrieved in App)
     bookings = bookings
    //if we have a booking id, we only want to display the single booking
    if(id) {
        bookings = getSingleBooking(bookings, id)
    }
    //if we have a query string, filter the bookings
    if(haveQueryParameters(queryObj)) {
        bookings = getFilteredBookings(bookings, queryObj)
    }
    return (
		<div>
		{bookings.map(booking => (
			<Booking  {...props} key={booking._id} booking={booking} haveSingleBooking={haveSingleBooking(bookings)}  />								
		))}
		</div>
	)

}

export default Bookings;