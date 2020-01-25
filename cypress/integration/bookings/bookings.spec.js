let fixtures = {}
 
beforeEach(()=> {
    cy.viewport(1024, 786)
    cy.visit("/")
    //start test from home page
    cy.contains("Home").click()
    cy.fixture("registerUser.json").then(user => {
        cy.get("[data-cy=login]").click()
        cy.get("[name=username").type(user.username)
        cy.get("[name=email").type(user.email) //depends on login form
        cy.get("[data-cy=password]").type(user.password)
        cy.get("[type=submit]").click()
        fixtures.registeredUser = user
    })
    cy.fixture("editBooking.json").then(booking => {
        fixtures.editedBooking = booking
    })
    cy.fixture("newBooking.json").then(booking => {
        fixtures.newBooking = booking
        //if the test booking already exists, delete it
        deleteBooking(booking)
    })
})

function deleteBooking(booking) {
    cy.root().then(root => {
        if (root.find("[data-cy=${booking.title}]").length > 0) {
            cy.get("[data-cy=${booking.service}]").click()
            cy.get("[data-cy=deleteButton]").click()
        }
    })
}

describe("My Bookings", () => {
    it("should navigate to my bookings", function() {
        cy.get("[data-cy=mybookings]").click()
        cy.url().should("include", fixtures.registeredUser.username)
    })
        
})

describe("Add a Booking", () => {
    it("should display add booking form", () =>{
        cy.get("[data-cy=addbooking]").click()
        cy.get("[data-cy=addBookingForm]").should("be.visible")
    })
    it("should add and delete a booking", () => {
        cy.get("[data-cy=addBooking]").click()
        cy.get("[data-cy=addBookingForm]").click()
        cy.get("[data-cy=service]").type(fixtures.newBooking.service)
        cy.get("[data-cy=level]").type(fixtures.newBooking.level)
        cy.get("[data-cy=date]").type(fixtures.newBooking.date)
        cy.get("[data-cy=time]").type(fixtures.newBooking.time)
        cy.get("[data-cy=duration]").type(fixtures.newBooking.duration)
        cy.get("[data-cy=name]").type(fixtures.newBooking.name)
        cy.get("[data-cy=email]").type(fixtures.newBooking.email)
        cy.get("[data-cy=contact]").type(fixtures.newBooking.contact)
        cy.get("[data-cy=hireOne]").type(fixtures.newBooking.hireOne)
        cy.get("[data-cy=hireTwo]").type(fixtures.newBooking.hireTwo)
        cy.get("[data-cy=hireThree]").type(fixtures.newBooking.hireThree)
        cy.get("[data-cy=paid]").type(fixtures.newBooking.paid)
        cy.get("[data-cy=payment]").type(fixtures.newBooking.payment)
        cy.get("[data-cy=refundPayment]").type(fixtures.newBooking.refundPayment) 
        cy.get("[data-cy=payButton]").click()
        //verify new booking was added
        cy.root().should("contain", fixtures.newBooking.service)
        //if the booking exists, delete it
        cy.get(`[data-cy=${fixtures.newBooking.service}]`).then(newBooking => {
            newBooking.click()
            cy.get("[data-cy=deleteButton]").click()
        })
        //verify booking was deleted
        cy.root().should("not.contain", fixtures.newBooking.service)
    })
})

describe("Edit a booking", () => {
    it("should display edit booking form", () => {
        //first create a post to edit
        cy.get("[data-cy=addBooking]").click()
        cy.get("[data-cy=addBookingForm]").click()
        cy.get("[data-cy=service]").type(fixtures.newBooking.service)
        cy.get("[data-cy=level]").type(fixtures.newBooking.level)
        cy.get("[data-cy=date]").type(fixtures.newBooking.date)
        cy.get("[data-cy=time]").type(fixtures.newBooking.time)
        cy.get("[data-cy=duration]").type(fixtures.newBooking.duration)
        cy.get("[data-cy=name]").type(fixtures.newBooking.name)
        cy.get("[data-cy=email]").type(fixtures.newBooking.email)
        cy.get("[data-cy=contact]").type(fixtures.newBooking.contact)
        cy.get("[data-cy=hireOne]").type(fixtures.newBooking.hireOne)
        cy.get("[data-cy=hireTwo]").type(fixtures.newBooking.hireTwo)
        cy.get("[data-cy=hireThree]").type(fixtures.newBooking.hireThree) 
        cy.get("[data-cy=payButton]").click()
        //see if we can show the edit booking form
        cy.contains(fixtures.editedBooking.service).click({force: true})
        cy.get("[data-cy=editButton]").click()
        cy.get("[data-cy=addBookingForm]").should(be.visible)
        cy.get("[data-cy=editButton]").click()
        //delete the booking
        deleteBooking(fixtures.editedBooking)
    })
})