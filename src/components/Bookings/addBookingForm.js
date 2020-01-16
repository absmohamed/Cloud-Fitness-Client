const NewBooking = (props) => {
    const {AddNewBooking} = props
     

    //Pass props with history back to callback function
    function addBooking(event) {
        addNewBooking(event,props)
    }

    function onTimeChange(time) {
        setCurrentTime(time)

    }
    const [currentTime,setCurrentTime] = useState(Date.now)
    return (
        <section className="page-container">
        <h2>Title</h2>
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
            <h4>Level</h4>
            <select>
                <option value="developed">Developed</option>
                <option selected value="intermediate">Intermediate</option>
                <option value="advance"></option>
            </select>
            </div>
            <h4>Time</h4>
            <div>
                <TimePicker
                onChange={onTimeChange}
                value={currentTime}
                />
            </div>
            <div> 
            <select>
                <option value="duration">20</option>
                <option selected value="duration">30</option>
                <option value="duraction">40</option>
                <option value="duration">50</option>
            </select>
            </div>
        </form>
        </section>

    ),
}