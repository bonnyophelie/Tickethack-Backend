describe('Booking API Tests', () => {
	it('should create a new booking', () => {
		const tripId = '....' // Replace with a valid tripId

		cy.request('POST', '/cart/', { tripId: tripId }).then((response) => {
			expect(response.status).to.equal(200)
			expect(response.body.result).to.be.true
		})
	})

	it('should get all unpaid bookings', () => {
		cy.request('GET', '/cart').then((response) => {
			expect(response.status).to.equal(200)
			expect(response.body.result).to.be.true
			expect(response.body.bookings).to.exist
		})
	})
})

describe('Booking API Tests', () => {
	it('should create a new booking', () => {
		const tripId = '....' // Replace with a valid tripId

		cy.request('POST', '/cart', { tripId: tripId }).then((response) => {
			expect(response.status).to.equal(200)
			expect(response.body.result).to.be.true
		})
	})

	it('should get all unpaid bookings', () => {
		cy.request('GET', '/cart').then((response) => {
			expect(response.status).to.equal(200)
			expect(response.body.result).to.be.true
			expect(response.body.bookings).to.exist
		})
	})

	it('should delete a booking by tripId', () => {
		const tripIdToDelete = '....' // Replace with a valid tripId

		cy.request('DELETE', `/cart/${tripIdToDelete}`).then((response) => {
			expect(response.status).to.equal(200)
			expect(response.body.result).to.be.true
			expect(response.body.bookings).to.exist
		})
	})
})
