const { test, expect } = require('@playwright/test');

test.describe('Auth', () => {
    test('should generate a token with valid credentials', async ({ request }) => {
        const response = await request.post('/auth', {
            data: {
                username: 'admin',
                password: 'password123'
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body).toHaveProperty('token');
        expect(body.token).toBeTruthy();
        expect(typeof body.token).toBe('string');
    });
});