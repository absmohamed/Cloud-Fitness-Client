import React from 'react'
import Bookings from '../components/Bookings/bookings';
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

//get all bookings
export const getAllBookings = async () => {
    try {
        const response = await.get("/bookings")
        return response.data

    }catch (error) {
        console.log("got an error from the server fetching booking: ", error)
        throw error
    }
}

export const getSinglebooking = (bookings, id) {
    const bookings = bookings.filter(booing => booking._id === id)
    return booking[0]
}

export const getFileteredBookings = (bookings, filters => {
    let filteredBookings = Bookings
    for(let attr of Object.keys(filters)) {
        filteredBookings = filteredBookings.filter((bookings) => booking[attr] === filters[attr])

    }
    return filteredBookings
})

export const updateBooking = async (booking) => {
    try {
        const {_id} = booking
        const response = await api.put('/bookings/${_id}', booking)
        return response.data
    }
    catch (error) {
        console.log("Error updating [booking:", error)
        throw (error)
    }
}

export const removeBooking = async (id) => {
    try {
        await api.delete('/bookings/$(_id)')
    }
    catch (error) {
        console.log("Error deleting [booking:", error)
        throw (error)
    }
}

//calcuate payment total


module.exports = {
    addNewBooking
}