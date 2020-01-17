import React from 'react'
// import api from '../con'

//Collect Data from create a booking
export const addNewBooking = async (bookingInfo) => {
    //calls to server to add new booking
    //will return the new booking
    const createBooking = {
        service: bookingInfo.service,
        level: bookingInfo.level,
        date: bookingInfo.date,
        time: bookingInfo.time,
        duration: bookingInfo.duaration,

    };
    try {
        const response = await api.booking('/bookings', createBooking)
        return response.date
    }
    catch (error) {
        console.log('Error adding blog post: ', error)
        throw(error)
    }
}



//calcuate payment total


module.exports = {
    addNewBooking
}