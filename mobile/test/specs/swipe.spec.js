describe('Swipe / Scroll', () => {
    it('should swipe through carousel and verify content changes', async () => {
        await $('~Swipe').click();
        await browser.pause(1000);

        const firstText = await $('~Carousel').getText();

        await browser.swipe({ direction: 'left' });
        await browser.pause(1000);

        const secondText = await $('~Carousel').getText();
        expect(secondText).not.toEqual(firstText);
    });
});