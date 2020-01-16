const NewBooking = (props) => {
    const {AddNewBooking} = props
        super(props);
        this.state = {
            service: 'String',
            level: 'String',
            participants: 'String',
            dob: new Date(),
            date: new Date(),
            time: '10:00',
            duration: Number,
            contact: "string",
            payment: Number,

        }

    //Pass props with history back to callback function
    function addBooking(event) {
        AddNewBooking(event,props)
    }
    return (
        <section className="page-container">
        <h2>Title</h2>
        <form onSubmit={addBlogPost}>
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
                onChange={this.onChange}
                value={this.state.time}
                />
            </div>
            <div>
             <select>  
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