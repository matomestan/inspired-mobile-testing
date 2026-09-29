describe('WebView (Bonus)', () => {
    it('should open WebdriverIO site in WebView', async () => {
        await $('~Webview').click();
        await browser.pause(3000);

        const contexts = await browser.getContexts();
        expect(contexts.length).toBeGreaterThan(1);

        const webContext = contexts.find(c => c.includes('WEBVIEW'));
        await browser.switchContext(webContext);

        const bodyText = await $('body').getText();
        expect(bodyText).toContain('WebdriverIO');
    });
});