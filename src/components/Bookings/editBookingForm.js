import React, { useState } from "react"
import { useGlobalState } from "../../config/store" 
import TimePicker from 'react-time-picker'
import DatePicker from "react-datepicker"

import {
    updateBooking,
    getSingleBooking,
    updateBookingInBookingsArray,
} from "../../actions/bookingActions"


const EditBookingForm = ({match, history}) => {
    const { store, dispatch } = useGlobalState()
    const { Bookings, loggedInUser } = store

    const id = match.params ? match.params.id : null
    const booking = getSingleBooking(Bookings, id)

    const [values, setValues] = useState({
        service: booking && booking.service,
        level: booking && booking.level,
        date: booking && booking.date,
        time: booking && booking.time,
        duration: booking && booking.duration,
        name: booking && booking.name,
        email: booking && booking.email,
        contact: booking && booking.contact,
        hireOne: booking && booking.hireOne ? booking.hireOne : "",
        hireTwo: booking && booking.hireTwo ? booking.hireTwo : "",
        hireThree: booking && booking.hireThree ? booking.hireThree : "",
        paid: booking && booking.paid ? booking.paid : ""
    })
    

    function editBooking(event) {
        event.preventDefault()

        const form = event.target
        const updatedBooking = {
            _id: booking._id,
            service: form.service.value,
            level: form.level.value,
            date: form.Date.now,
            time: form.Date.now,
            duration: form.duration.value,
            name: form.name.value,
            email: form.emai.value,
            contact: form.contact.value,
            hireOne: form.hireOne.value,
            hireTwo: form.hireTwo.value,
            hireThree: form.hireThree.value,
            paid: form.paid.value,
            payment: form.payment.value

        }
        //call to server to add Booking
        updateBooking(updatedBooking)
        .then(response => {
                const updatedBooking = response

        //update the state
            dispatch({
            type: "setBookings",
            data: updateBookingInBookingsArray(Bookings, updatedBooking)
        })
        history.push(`/Bookings/${id}`)
        })
        .catch(error => {
            console.log(`An error occurred updating the Booking with id ${id}: ${error}`)
            history.push(`/Bookings/?username=${loggedInUser}`)
        })
        
    }

    function onTimeChange(time) {
        setCurrentTime(time);

    }
    function onDateChange(date) {
        setCurrentDate(date);
    }

    const [currentTime,setCurrentTime] = useState(Date.now);
    const [currentDate, setCurrentDate] = useState(Date.now);
    const [modified_date] = useState(Date.now)

    function handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        setValues( prevState => {
            return {...values,
            [name]: value}
        })
    }
    return (
        <section>
        <form data-cy="editBookingForm" onSubmit={editBooking}>
            <h2>Edit Booking</h2>
            <h2 data-cy={"service"}>{values.service}</h2>
            <p data-cy={"modified_date"}>{values.modified_date}</p>
            <p data-cy={"paid"}>{values.paid}</p>

            <div>
            <label className="label">Service</label>
            <select>
                <option
                className="service"
                name="service"
                data-cy="service"
                required
                value={values.service}
                onChange={handleChange}>
                </option>
            </select>
            </div>
            <div>
            <label className="label">Date &amp; Time</label>
            <label className="aria-label">Date</label>
            <DatePicker className="react-date-picker"
                name="date"
                data-cy="date"
                value={currentDate.Date.now}
                onChange={onDateChange}/>
                
            <label className="aria-label">Time</label>
            <TimePicker
                className="react-time-picker"
                name="time"
                data-cy="time"
                selected value={currentTime.Date.now}
                onChange={onTimeChange} />
           
            </div>
            <div>
            <label className="label">Duration</label>
            <select>
                <option 
                    type="string"
                    className="duration"
                    name="duration"
                    data-cy="duration"
                    selected value={ Number, values.duration}
                    onChange={handleChange}>
                </option>
                <option name="duration" data-cy="duration" value={Number}>20</option>
                <option name="duration" data-cy="duration" selected value={Number} >30</option>
                <option name="duration" data-cy="duration" value={Number}>40</option>
                <option name="duration" data-cy="duration" value={Number}>50</option>
            </select>
            </div>
            <div>
            <label className="label">Name</label>
            <input
                type="text"
                className="input"
                data-cy="name"
                name="name"
                placeholder=" firts and last name (required)"
                value={values.name}>
        </input>
            </div>
            <div>
            <label className="label">Email</label>
            <input
                type="text"
                className="input"
                data-cy="email"
                name="email"
                placeholder="email (required)"
                value={values.name}>
        </input>
            </div>
            <div>
            <label className="label">contact</label>
            <input
                type="string"
                className="input"
                data-cy="contact"
                name="contact"
                placeholder="contact (required)"
                value={values.contact}>
            </input>
            </div>
            <div>
            <label className="label">Equipment Hire all items $5</label>
            <div>
            <label className="label">Hire One</label>

            <select>
            <option 
                    type="string"
                    className="hireOne"
                    name="hireOne"
                    data-cy="hireOne"
                    selected value={values.hireOne}
                    onChange={handleChange}>
                </option>
            <option name="hireOne" data-cy="hireThree" selected value="null">null</option>
            <option name="hireOne" data-cy="hireThree" value="skipping-rope">skipping-rope</option>
            <option name="hireOne" data-cy="hireThree" value="yoga-mat">yoga-mat</option>
            <option name="hireOne" data-cy="hireThree" value="dumb-bell">dumb-bell</option>
            <option name="hireOne" data-cy="hireThree" value="kettle-bell">kettle-bell</option>
            <option name="hireOne" data-cy="hireThree" value="medicine-ball">medicine-ball</option>
            </select>
            </div>
            <div>
            <label className="label">Hire Two</label>

            <select>
                <option 
                    type="string"
                    className="hireTwo"
                    name="hireTwo"
                    data-cy="hireTwo"
                    selected value={values.hireTwo}
                    onChange={handleChange}>
                </option>
                <option name="hireTwo" data-cy="hireTwo" selected value="null">null</option>
                <option name="hireTwo" data-cy="hireTwo" value="skipping-rope">skipping-rope</option>
                <option name="hireTwo" data-cy="hireTwo" value="yoga-mat">yoga-mat</option>
                <option name="hireTwo" data-cy="hireTwo" value="dumb-bell">dumb-bell</option>
                <option name="hireTwo" data-cy="hireTwo" value="kettle-bell">kettle-bell</option>
                <option name="hireTwo" data-cy="hireTwo" value="medicine-ball">medicine-ball</option>
            </select>
            </div>
            <div>
            <label className="label">Hire Three</label>

            <select>
                <option 
                    type="string"
                    className="hireThree"
                    name="hireThree"
                    data-cy="hireThree"
                    selected value={values.hireThree}
                    onChange={handleChange}>
                </option>
                <option name="hireThree" data-cy="hireThree" selected value="null">null</option>
                <option name="hireThree" data-cy="hireThree" value="skipping-rope">skipping-rope</option>
                <option name="hireThree" data-cy="hireThree" value="yoga-mat">yoga-mat</option>
                <option name="hireThree" data-cy="hireThree" value="dumb-bell">dumb-bell</option>
                <option name="hireThree" data-cy="hireThree" value="kettle-bell">kettle-bell</option>
                <option name="hireThree" data-cy="hireThree" value="medicine-ball">medicine-ball</option>
            </select>
            </div>
        </div>
        <div>
           
            <input
				type="submit"
				data-cy="addButton"
				value="Create Post"
				className="button is-info">
			Submit Booking</input>
            </div>
        </form>
    </section>
    )

}

export default EditBookingForm