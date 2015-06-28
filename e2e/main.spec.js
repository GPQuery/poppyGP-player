'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
<<<<<<< HEAD
    browser.get('/index.html');
=======
    browser.get('http://localhost:3000/index.html');
>>>>>>> e8c8c0cf9c81c15387a61bc891adf244c7bafb70
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });

<<<<<<< HEAD
  it('should list more than 5 awesome things', function () {
=======
  it('list more than 5 awesome things', function () {
>>>>>>> e8c8c0cf9c81c15387a61bc891adf244c7bafb70
    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });

});
