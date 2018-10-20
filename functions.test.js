const functions = require('./functions.js');

test('Example test', function() {
  expect(1 + 1).toBe(2);
});

test('Should be able to load people by ID', function() {
  expect.assertions(1);

  return functions.loadPerson(1)
    .then(person => {
      expect(person.name).toBe('Luke Skywalker');
    });

});