var triangleArea = a  *  h  /  2;

function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
	console.log('Nieprawidłowe dane');
	} else {
	return a * h / 2; }
}
console.log( getTriangleArea(10,6) );
console.log( getTriangleArea(15,25) );
console.log( getTriangleArea(100,76) );
console.log( getTriangleArea(43,24) );
