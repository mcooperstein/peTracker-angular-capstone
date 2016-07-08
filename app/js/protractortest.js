describe('homepage', function () {
    it('should visit peTracker and find the homepage', function () {
        browser.get('http://mcooperstein.github.io/peTracker-angular-capstone/app/index.html');
        expect(element(by.css('h2')).getInnerHtml()).toMatch(/Select Your Pet's Profile Below:/);
        expect(element(by.css('h1')).getInnerHtml()).toMatch(/Welcome to PeTracker - The Best way to Track your Pet's Needs/);
    });
});
