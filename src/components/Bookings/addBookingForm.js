import React, {useState, Fragment} from "react";
import TimePicker from 'react-time-picker/dist/entry.nostyle';
import DatePicker from "react-datepicker"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import en from 'date-fns/locale/en';


// registerLocale('en', en);
// setDefaultLocale('en-GB');


// const AddBookingForm = (props) => {
//     const {addNewBooking} = props;
    
//     //Pass props with history back to callback function
//     function addBooking(event) {
//         addNewBooking(event,props);
//     }

//     function onTimeChange(time) {
//         setCurrentTime(time);

//     }
//     function onDateChange(date) {
//         setCurrentDate(date);
//     }

//     const [currentTime,setCurrentTime] = useState(Date.now);
//     const [currentDate, setCurrentDate] = useState(Date.now);
    
<<<<<<< HEAD
    return (
        <Fragment>
        <section className="content">
        <h1>Make A Booking</h1>
        <Heading data-cy={service}>{service}</Heading>
        <form onSubmit={addBooking}>
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
            <h4>Total of your selections: &#36; Total variable</h4><button classsName='bg-btn'>Pay Now</button>
        </form>
        <div>
            <button className="bg-btn">Edit</button>
            <button className="bg-btn">Delete</button>
        </div>
        </section>
        </Fragment>
=======
//     return (
//         <section className="page-container">
//         <h2>Make A Booking</h2>
//         <form onSubmit={addBooking}>
//             <div>
//             <h4>Workout Type</h4>
//             <select>
//                 <option value="flex-n-relax">Flex-n-Relax</option>
//                 <option selected value="aerobic">Aerobic</option>
//                 <option value="strength">Strength</option>
//             </select>
//             </div>
//             <div>
//             <label className="label">Level</label>
//             <select>
//                 <option value="developed">Developed</option>
//                 <option selected value="intermediate">Intermediate</option>
//                 <option value="advance">Advanced</option>
//             </select>
//             </div>
//             <label className="label">Date &amp; Time </label>
//             <div>
//                 <label className="aria-label">Date</label>
//                 <DatePicker className="react-time-picker"
//                 onChange={onDateChange}
//                 value={currentDate}
//                 />
//                 <label className="aria-label">Time</label>
//                 <TimePicker
//                 onChange={onTimeChange}
//                 value={currentTime}
//                 showTimeSelect
//                 dateFormat="Pp"
//                 />
               
//             </div>
//             <div> 
//             <h4>Duration</h4>
//             <select>
//                 <option value="duration">20</option>
//                 <option selected value="duration">30</option>
//                 <option value="duraction">40</option>
//                 <option value="duration">50</option>
//             </select>
//             </div>
//             <label className="label">Name</label>
//             <input
// 				type="text"
// 				className="input"
// 				data-cy="name"
// 				name="name"
// 				placeholder="name (required)"
//             ></input>
//             <label className="label">Email</label>
//             <input 
//                 type="text"
//                 className="email"
//                 data-cy="email"
//                 name="name"
//                 placeholder="please enter your email"
//             ></input>
//             <div>
//             <label className="aria-label">Date of Birth</label>
//                 <DatePicker
//                 onChange={onDateChange}
//                 value={currentDate}
//                 />
//             </div>
//             <div>
//                 <label className="label">Contact</label>
//                 <input 
//                     type="text"
//                     className="contact"
//                     data-cy="contact"
//                     name="contact"
//                     placeholder="best contact number please"
//                 ></input>     
//             </div> 
//             <div>
//                 <label className="label">Equipment Hire all items $5</label>
//                 <div>
//                 <label className="label">Hire One</label>

//                 <select>
//                     <option selected value="hireOne">null</option>
//                     <option value="hireOne">skipping-rope</option>
//                     <option value="hireOne">yoga-mat</option>
//                     <option value="hireOne">dumb-bell</option>
//                     <option value="hireOne">kettle-bell</option>
//                     <option value="hireOne">medicine-ball</option>
//                 </select>
//                 </div>
//                 <div>
//                 <label className="label">Hire Two</label>

//                 <select>
//                     <option selected value="hireTwo">null</option>
//                     <option value="hireTwo">skipping-rope</option>
//                     <option value="hireTwo">yoga-mat</option>
//                     <option value="hireTwo">dumb-bell</option>
//                     <option value="hireTwo">kettle-bell</option>
//                     <option value="hireTwo">medicine-ball</option>
//                 </select>
//                 </div>
//                 <div>
//                 <label className="label">Hire Three</label>

//                 <select>
//                     <option selected value="hireThree">null</option>
//                     <option value="hireThree">skipping-rope</option>
//                     <option value="hireThree">yoga-mat</option>
//                     <option value="hireThree">dumb-bell</option>
//                     <option value="hireThree">kettle-bell</option>
//                     <option value="hireThree">medicine-ball</option>
//                 </select>
//                 </div>

//             </div>
//             <h4>Total of your selections: &#36; Total variable</h4><button classsName='bg-btn'>Pay Now</button>
//         </form>
//         <div>
//             <button className="bg-btn">Edit</button>
//             <button className="bg-btn">Delete</button>
//         </div>
//         </section>
>>>>>>> master

//     )
// }

// export default AddBookingForm