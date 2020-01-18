import React from "react";
import TimePicker from 'react-time-picker/dist/entry.nostyle';
import DatePicker from "react-datepicker"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import en from 'date-fns/locale/es';
import bookings from "./Bookings/bookings"

registerLocale('en', en);
setDefaultLocale('en-GB');


const addBookingForm = (props) => {
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

    function onDobDateChange(date) {
        setCurrentDobDate(date);
    }

    const [currentTime,setCurrentTime] = useState(Date.now);
    const [currentDate, setCurrentDate] = useState(Date.now);
    const [currentDobDate,setCurrentDobDate] = useState(Date.now);
    return (
        <section className="page-container">
        <h2>{Title}</h2>
        <form onSubmit={addBooking}>
            <div>
            <h4>Workout Type</h4>
            <select>
                <option value="flex-n-relax">Flex-n-Relax</option>
                <option selected value="aerobic">Aerobic</option>
                <option value="strength">Strength</option>
            </select>
            </div>
            <div>
            <label className="label">Level</label>
            <select>
                <option value="developed">Developed</option>
                <option selected value="intermediate">Intermediate</option>
                <option value="advance">Advanced</option>
            </select>
            </div>
            <label className="label">Date &amp; Time </label>
            <div>
                <label className="aria-label">Date</label>
                <DatePicker className="react-time-picker"
                onChange={onDateChange}
                value={currentDate}
                />
                <label className="aria-label">Time</label>
                <TimePicker
                onChange={onTimeChange}
                value={currentTime}
                showTimeSelect
                dateFormat="Pp"
                />
               
            </div>
            <div> 
            <h4>Duration</h4>
            <select>
                <option value="duration">20</option>
                <option selected value="duration">30</option>
                <option value="duraction">40</option>
                <option value="duration">50</option>
            </select>
            </div>
            <label className="label">Name</label>
            <input
				type="text"
				className="input"
				data-cy="name"
				name="name"
				placeholder="name (required)"
            ></input>
            <label className="label">Email</label>
            <input 
                type="text"
                className="email"
                data-cy="email"
                name="name"
                placeholder="please enter your email"
            ></input>
            <div>
            <label className="aria-label">Date of Birth</label>
                <DatePicker
                onChange={onDobDateChange}
                value={currentDobDate}
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
            <h4>Total of your selectin: ${total}</h4><button classsName='bg-btn'>Pay Now</button>
        </form>
        </section>

    )
}

export default AddBookingForm