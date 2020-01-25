import React, {useState, Fragment} from "react"
import TimePicker from "react-time-picker/dist/entry.nostyle"
import DatePicker from "react-datepicker"
import { registerLocale, setDefaultLocale } from  "react-datepicker"
import en from 'date-fns/locale/en'
import { calculatePayment} from "../../actions/bookingActions"
var totalCost = 0
var Booking = null
registerLocale('en', en);
setDefaultLocale('en-GB');
const AddBookingForm = (props) => {
    const {addNewBooking} = props;
    
    //Pass props with history back to callback function
    function addBooking(event) {
        addNewBooking(event,props);
    }
    function onTimeChange(time) {
        setCurrentTime(time);
    }
    function onDateChange(date) {
        setCurrentDate(date);
    }
    const [currentTime,setCurrentTime] = useState(Date.now);
    const [currentDate, setCurrentDate] = useState(Date.now);
    const {service, paid} = Booking
    const total = totalCost
    return (
        <Fragment>
        <section className="content">
        <h1>Make A Booking</h1>
        <h2 data-cy="service">{service}</h2>
        <form data-cy="addBookingForm" onSubmit={addBooking}>
            <div>
            <h4>Workout Type</h4>
            <select>
                <option  type="string" name="service" data-cy="service" value="flex-n-relax">Flex-n-Relax</option>
                <option type="string" name="service" data-cy="service" selected value="aerobic">Aerobic</option>
                <option  type="string" name="service" data-cy="service" value="strength">Strength</option>
            </select>
            </div>
            <div>
            <label className="label">Level</label>
            <select>
                <option type="string" name="level" data-cy="level" value="developed">Developed</option>
                <option  type="string" name="Level" data-cy="level" selected value="intermediate">Intermediate</option>
                <option type="string" name="level" data-cy="level" value="advanced">Advanced</option>
            </select>
            </div>
            <label className="label">Date &amp; Time </label>
            <div>
                <label className="aria-label">Date</label>
                <DatePicker className="react-date-picker"
                name="date"
                data-cy="date"
                onChange={onDateChange}
                value={currentDate}
                />
                <label className="aria-label">Time</label>
                <TimePicker className="react-time-picker"
                name="time"
                data-cy="time"
                onChange={onTimeChange}
                value={currentTime}
                showTimeSelect
                dateFormat="Pp"
                />
               
            </div>
            <div> 
            <h4>Duration</h4>
            <select>
                <option name="duration" data-cy="duration" value={Number}>20</option>
                <option name="duration" data-cy="duration" selected value={Number} >30</option>
                <option name="duration" data-cy="duration" value={Number}>40</option>
                <option name="duration" data-cy="duration" value={Number}>50</option>
            </select>
            </div>
            <label className="label">Name</label>
            <input
                type="string"
                className="input"
                data-cy="name"
                name="name"
                placeholder="name (required)"
            ></input>
            <label className="label">Email</label>
            <input 
                type="string"
                className="email"
                data-cy="email"
                name="name"
                placeholder="please enter your email"
            ></input>
            <div>
            <label className="aria-label">Date of Birth</label>
                <DatePicker
                name="dob"
                data-cy="dob"
                onChange={onDateChange}
                value={currentDate.Date.now}
                />
            </div>
            <div>
                <label className="label">Contact</label>
                <input 
                    type="text"
                    className="contact"
                    data-cy="contact"
                    name="contact"
                    placeholder="best contact number please"
                ></input>     
            </div> 
            <div>
                <label className="label">Equipment Hire all items $5</label>
                <div>
                <label className="label">Hire One</label>
                <select>
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
            <p>Please make payment of your selections before submitting your bookings</p><button  data-cy="calculate-payment"  value={totalCost} onClick={() => calculatePayment}>Total Selections</button> 
            <p>Your Total: &#36; {total}</p><button classsName='bg-btn'>Pay Now</button>
            <p data-cy="paid">Paid: {paid}</p>
            <input
                type="submit"
                data-cy="addButton"
                value="Create Post"
                className="button is-info"
            >Submit Booking</input>
            </div>
        </form>
        <div>
            <button className="bg-btn" data-cy="editButton">Edit</button>
            <button className="bg-btn" data-cy="deleteButton">Delete</button>
        </div>
        </section>
        </Fragment>
    )
}
export default AddBookingForm