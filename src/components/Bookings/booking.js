import React, { Fragment, useState } from "react"
import { Link } from 'react-router-dom'
import { useGlobalState } from "../config/Store" //needs adding
import TimeAgo from react-timeago
import TimePicker from 'react-time-picker/dist/entry.nostyle';
import DatePicker from "react-datepicker"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import en from 'date-fns/locale/en';
import { removeBooking } from "../../bookingActions.js"
import Booking from ".bookings";

registerLocale('en', en);
setDefaultLocale('en-GB');

const Booking = props => {
    function deleteBooking(id) {
        //delete the book on the server
        removeBooking(id).then(() => {
            const booking = Bookings.filter((booking) => booking._id !== id)
            //Update the state
            dispatch ({
                type: "setBookings",
                data: Bookings
            })
            //Redirect to my Bookings
            props.history.push(`/bookings/?username=${loggedInUser}`)
            console.log("props history", props.history)
        }).catch((error) => {
            console.log(`An error occurred deleting the booking: ${error}`)
        })
    }
    const { Bookings, getSingleBooking} = props
    const { store, dispatch } = useGlobalState()
    const { Bookings, loggedInUser } = store
    const { username, service, level, date, time, duration, name, email, contact, hireOne, hireTwo, hireThree, paid, _id, modified_date} = Bookings
    const showAddNewBooking = username !== loggedInUser
    const showEditDelete = !showAddNewBooking && getSingleBooking
    return (
        <Fragment>
            <section className="content">
                <Link to {`/bookings/${_id}`}>
                    <Heading data-cy={service}>{service}</Heading>
                </Link> 
                <p>{username}</p>
                <p><TimeAgo date={modified_date}/></p> 
                <p>{level}</p>
                <p>{date}</p>
                <p>{time}</p>
                <p>{duration}</p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{contact}</p>
                <p>{hireOne}</p>
                <p>{hireTwo}</p>
                <p>{hireThree}</p>
                <p>{paid}</p> 
            </section>
            {showEditDelete && (
                <div className="level-right">
                    <Button className="add-margin" color="info" data-cy="editButton" onClick={() => props.history.push(`/bookings/edit/${_id}`)}>Edit</Button>
                    <Button className="add-margin" color="info" data-cy="deleteButton" onClick={() => deleteBooking(_id)}>Delete</Button>
                </div>
            )}
            
        </Fragment>
    )
}

// export default;