let fixtures = {}

beforeEach(() => {
	cy.viewport(1024, 768)
	cy.visit("/")
	// Start tests from home page
	cy.get("[data-cy=home]").click()
	// If user is logged in, log out
	cy.get("[data-cy=navbar]").then(navbar => {
		if (navbar.find("[data-cy=logout]").length > 0) {
			cy.get("[data-cy=logout").click()
		}
	})
	cy.fixture("registeredUser.json").then(user => {
		fixtures.registeredUser = user
	})
})

describe("Login", () => {
	it("should route to /auth/login", () => {
		cy.get("[data-cy=login]").click()
		cy.url().should("include", "/auth/login")
	})
	it("should render SignIn component", () => {
		cy.get("[data-cy=login]").click()
		cy.get("[data-cy=loginForm]").should("be.visible")
	})
	it("can login", () => {
		cy.get("[data-cy=login]").click()
		cy.get("[data-cy=username]").type(fixtures.registeredUser.username)
		cy.get("[data-cy=password]").type(fixtures.registeredUser.password)
		cy.get("[data-cy=loginButton").click()
		cy.url().should("include", "/bookings")
	})
})

describe("Logout", () => {
	it("should logout user", () => {
		cy.get("[data-cy=login]").click()
		cy.get("[data-cy=username]").type(fixtures.registeredUser.username)
		cy.get("[data-cy=password]").type(fixtures.registeredUser.password)
		cy.get("[data-cy=loginButton").click()
		cy.get("[data-cy=logout]").click()
		cy.get("[data-cy=navbarBrand").should("contain", "guest")
	})
})