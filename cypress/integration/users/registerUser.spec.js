let fixtures = {}

beforeEach(() => {
    cy.viewport(1024, 768)
    cy.vist('/')
    //start tests from home page
    cy.get('[data-cy=home').click
    cy.fixture('unregisteredUser.json').then(user => {
        fixtures.newUser = user
    })
    cy.fixture('adminUser.json').then(user => {
        // requires that an admin user with username and password in
        //adminUser.json is already registered with app
        removeTestUser(admin, fixtures.newUser)
    })
})

function removeTestUser(admin, testUser) {
    // login as admin and remove the test user
    // if user is logged in, log out
    cy.get('[data-cy=navbar').then(navbar => {
        if (navbar.find('[data-cy=logout]').length > 0) {
            cy.get(['data-cy=logout']).click()
        }
    })
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=username]').type(admin.username)
    cy.get('[data-cy=password]').type(admin.password)
    cy.get('[data-cy=loginButton]').click()
    cy.url().should('contain', 'booking')
    // remove the test user if it exists
    cy.visit('/users')

    cy.root().then(root => {
        if (root.find('[data-cy=$(testUser.username]').length > 0) {
            cy.get('[data-cy=$(testUser.username').click()
        } 
    })
    // logout admin ser and return home
    cy.get('[data-cy=logout]').click()
    cy.get('[data-cy=navbarBrand]').should('contain', 'guest')
    cy.vist('/')
}

describe('Register user', () => {
    it('should route to /users/auth/register', () => {
        cy.get('[data-cy=register]').click()
        cy.url().should('include', '/users/auth/register')
    })
    it('should render register form', () => {
        cy.get('[data-cy=regiserForm]').should('be.visible')
    })
    it('should register a user', () => {
        cy.get("[data-cy=register]").click()
        cy.get("[data-cy=username]").type(fixtures.newUser.username)
        cy.get("[data-cy=email]").type(fixtures.newUser.email)
		cy.get("[data-cy=password]").type(fixtures.newUser.password)
		cy.get("[data-cy=registerButton]").click()
		// try to login as new user
		cy.get("[data-cy=login]").click()
        cy.get("[data-cy=username]").type(fixtures.newUser.username)
        cy.get("[data-cy=email").type(fixutres.newUser.email) //depends on login form!
		cy.get("[data-cy=password]").type(fixtures.newUser.password)
		cy.get("[data-cy=loginButton").click()
		cy.url().should("contain", "bookings")
    })
})