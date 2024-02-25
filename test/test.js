// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función par', function() {
	assert.equal(operaciones.par(4), 0);
	assert.equal(operaciones.par(5), 1);
	assert.equal(operaciones.par(17), 1);
	assert.equal(operaciones.par(36), 0);
});



