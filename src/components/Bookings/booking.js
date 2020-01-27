import React, { Fragment } from "./node_modules/react"
import { Link } from './node_modules/react-router-dom'
import { useGlobalState } from "../config/store" //needs adding
import TimeAgo from './node_modules/react-timeago'
import { removeBooking, refundPayment } from "../../bookingActions.js"


registerLocale('en', en);
setDefaultLocale('en-GB');

const Booking = props => {
    function deleteBooking(id) {
        //delete the book on the server
        removeBooking(id).then(() => {
            const Bookings = Bookings.filter((Booking) => booking._id !== id);
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
    const { loggedInUser } = store
    const { username, service, level, date, time, duration, name, email, contact, hireOne, hireTwo, hireThree, paid, _id, modified_date} = Bookings
    const showAddNewBooking = username !== loggedInUser
    const showEditDelete = !showAddNewBooking && getSingleBooking
    return (
        <Fragment>
            <section className="content">
                <Link to={`/bookings/${_id}`}>
                    <Heading data-cy={service}>{service}</Heading>
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
                    <Button className="add-margin" color="info" data-cy="mybookingsButton" onClick={() => props.history.push(`/bookings/mybookings/${_id}`)}>My Bookings</Button>
                    <Button className="add-margin" color="info" data-cy="editButton" onClick={() => props.history.push(`/bookings/edit/${_id}`)}>Edit</Button>
                    <Button className="add=margin" color="info" data-cy="refundPayment" onClick={()=> refundPayment}>Refund Payment</Button>
                    <Button className="add-margin" color="info" data-cy="deleteButton" onClick={() => deleteBooking(_id)(`/bookings/${_id}`)}>Delete</Button>
                </div>
            )}
        }   

        </Fragment>
    )
}

export default Booking;

