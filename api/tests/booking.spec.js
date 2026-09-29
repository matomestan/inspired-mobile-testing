const { test, expect } = require('@playwright/test');

test.describe('Booking', () => {
    test('should create a booking and verify response matches request', async ({ request }) => {
        const payload = {
            firstname: 'Jane',
            lastname: 'Doe',
            totalprice: 200,
            depositpaid: false,
            bookingdates: {
                checkin: '2026-12-15',
                checkout: '2026-12-20'
            },
            additionalneeds: 'Breakfast'
        };

        const response = await request.post('/booking', { data: payload });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body).toHaveProperty('bookingid');
        expect(body.booking).toMatchObject(payload);
    });
});