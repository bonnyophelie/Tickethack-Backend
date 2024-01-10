describe('Search Endpoint', () => {
	it('should return trips for valid search parameters', () => {
		const departure = 'Bruxelles'
		const arrival = 'Paris'
		const date = '2023-11-23' // Replace with a valid date

		cy.request({
			method: 'GET',
			url: `/search/${departure}/${arrival}/${date}`,
		}).then((response) => {
			// Assertions
			expect(response.status).to.equal(200)
			expect(response.body.result).to.be.true
			expect(response.body.trips).to.be.an('array')
		})
	})

	it('should return an error for invalid search parameters', () => {
		const invalidDeparture = 'Bordeaux'
		const invalidArrival = 'Paris'
		const invalidDate = '2024-01-10'

		cy.request({
			method: 'GET',
			url: `/search/${invalidDeparture}/${invalidArrival}/${invalidDate}`,
		}).then((response) => {
			// Assertions
			expect(response.status).to.equal(200)
			expect(response.body.result).to.be.false
			expect(response.body.error).to.equal('No trip found')
		})
	})
})
