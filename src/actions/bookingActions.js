import api from "../config/api"
import Bookings from '../components/Bookings/booking';


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
        name: bookingInfo.name,
        email: bookingInfo.email,
        dob: bookingInfo.date,
        contact: bookingInfo.contact,
        paid: bookingInfo.paid

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
        const response = await api.bookings("/bookings")
        return response.data

    }catch (error) {
        console.log("got an error from the server fetching booking: ", error)
        throw error
    }
}

export const getSingleBooking = async (bookings, id) => {
    const bookings = bookings.filter(booking => booking._id === id)
    return booking[0]
}

export const getFilteredBookings = async (Bookings, filters) => {
    let filteredBookings = bookings
    for(let attr of Object.keys(filters)) {
        filteredBookings = filteredBookings.filter((Bookings) => booking[attr] === filters[attr])

    }
    return filteredBookings
}

export const updateBooking = async (booking) => {
    try {
        const {_id} = booking
        const response = await api.put(`/bookings/${_id}`,booking)
        return response.data
    }
    catch (error) {
        console.log("Error updating [booking:", error)
        throw (error)
    }
}

export const removeBooking = async (id) => {
    try {
        await api.delete(`/bookings/${_id}`)
    }
    catch (error) {
        console.log("Error deleting [booking:", error)
        throw (error)
    }
}

//calcuate payment total
export const calculatePayment = async (id) => {
    let workoutRate = 10
    let hireRate = 5
    let totalCost = 0
    let duration = 0
    let count = 0
    try {
        const booking = await api.get(`/bookings/${id}`)
        duration = booking.duration
        const hireOne = booking.hireOne
        const hireTwo = booking.hireTwo
        const hireThree = booking.hireThree
        if (hireOne) count++
        if (hireTwo) count++
        if (hireThree) count++
        totalCost = (duration * workoutRate) + (count * hireRate) 
    }catch(error){
        console.log(`Error calculating the payment rate: ${error}`)

    }
    return totalCost
}
//recalculate payment when booking selection are editted
export const recalcutlatePayment = async (id, payment) => {
    let workoutRate = 10
    let hireRate = 5
    let totalCost = 0
    let duration = 0
    let count = 0
    try {
        const booking = await api.get(`/bookings/${id}`)
        duration = booking.duration
        payment = booking.payment
        const hireOne = booking.hireOne
        const hireTwo = booking.hireTwo
        const hireThree = booking.hireThree
        if (hireOne) count++
        if (hireTwo) count++
        if (hireThree) count++
        totalCost = (duration * workoutRate) + (count * hireRate)
        if (totalCost > payemnt) {
            totalCost - payment
        } else (totalCost < Payment) {
            payment - totalCost
        }
    }catch(error){
        console.log(`Error recalculating the payment rate: ${error}`)
    }
    return totalCost
}

export const refundPayment = async (id, payment) => {
    let refundPayment = 0
    try {
        const booking = await api.delete(`/bookings/${id}`)
        payment = booking.payment
        refundPayment === payment
    }catch(error){
        cosole.log(`Error processing your refund payment amount`)
    }
    return refundPayment
}

export const updateBookingInBookingsArray = (bookings, updatedBooking) => {
    return bookings.map((booking) => {
        if(booking._id === updatedBooking._id) {
            return updatedBooking
        }
        return booking
    })
}