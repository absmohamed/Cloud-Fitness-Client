// import React, {useState} from "react";
// import './bookings.scss'
// import TimePicker from 'react-time-picker/dist/entry.nostyle';
// import DatePicker from "react-datepicker"
// import { registerLocale, setDefaultLocale } from  "react-datepicker";
// import en from 'date-fns/locale/en';


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

//     )
// }

// export default AddBookingForm