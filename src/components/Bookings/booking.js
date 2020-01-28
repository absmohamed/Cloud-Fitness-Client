import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import { useGlobalState } from "../../config/store" //needs adding
import TimeAgo from 'react-timeago'
import { removeBooking, refundPayment } from "../../actions/bookingActions.js"


const Booking = props => {
    function deleteBooking(id) {
        //delete the book on the server
        removeBooking(id).then((bookings) => {
            const filteredBookings = bookings.filter((booking) => booking._id !== id);
            //Update the state
            dispatch ({
                type: "setBookings",
                data: filteredBookings
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
    const { loggedInUser } = store
    const { username, service, level, date, time, duration, name, email, contact, hireOne, hireTwo, hireThree, paid, _id, modified_date, payment} = Bookings
    const showAddNewBooking = username !== loggedInUser
    const showEditDelete = !showAddNewBooking && getSingleBooking
    return (
        <Fragment>
            <section className="content">
                <Link to={`/bookings/${_id}`}>
                    <h1 data-cy={service}>{service}</h1>
                </Link> 
                <p>{username}</p>
                <p><TimeAgo date={modified_date} /></p> 
                <p>{service}</p>
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
                <p>{payment}</p> 
            </section>
            {showEditDelete && (
                
                <div className="level-right">
                    <button className="add-margin" color="info" data-cy="mybookingsButton" onClick={() => props.history.push(`/bookings/mybookings/${_id}`)}>My Bookings</button>
                    <button className="add-margin" color="info" data-cy="editButton" onClick={() => props.history.push(`/bookings/edit/${_id}`)}>Edit</button>
                    <button className="add=margin" color="info" data-cy="refundPayment" onClick={()=> refundPayment}>Refund Payment</button>
                    <button className="add-margin" color="info" data-cy="deleteButton" onClick={() => deleteBooking(_id)(`/bookings/${_id}`)}>Delete</button>
                </div>
            )}
        }   

        </Fragment>
    )
}

export default Booking;

