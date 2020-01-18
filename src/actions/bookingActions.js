import api from "../config/api"
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

export const getSinglebooking = async (bookings, id) => {
    const bookings = bookings.filter(booking => booking._id === id)
    return booking[0]
}

export const getFilteredBookings = async (bookings, filters) => {
    let filteredBookings = Bookings
    for(let attr of Object.keys(filters)) {
        filteredBookings = filteredBookings.filter((bookings) => booking[attr] === filters[attr])

    }
    return filteredBookings
}

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
export const calculatepayment = async (booking, id) => {
    let time = req.body.time 
    let workoutRate = 10
    let hireRate = 5
    let totalCost = 0
    let duration = 0
    let count = 0
    const data = [{
        lookups: [], 
        rows: [{data: {_id: req.user._id}} ], 
        title: "workout", 
        columns: [{duration: req.body.time}, ],

    },{
        lookups: [],
        rows: [{data: {_id: req.user._id}}],
        title: "hires",
        columns: [{hireOne: req.body.hireOne}, {hireTwo: req.body.hireTwo}]
      }]

      for (let attr of Object.keys(hires)) {
          if (attr === null) {
            count = count
          } else {
              count += 1
          }
    }
    totalCost = (duration * rate) + (count * hireRate)
   
}
