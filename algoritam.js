//  Matrica susjedstva (moze da se mijenja)
var matricaSusjedstva = [
  [0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 0]
];

// Breadth First Search Algoritam
// Svi argumenti ove funkcije se mogu mijenjati
function bfsAlgoritam(graf, start, cilj) {
  var dužinaČvorova = {};

  for (var i = 0; i < graf.length; i++) {
    dužinaČvorova[i] = Infinity;
  }
  dužinaČvorova[start] = 0;

  var red = [start];
  var trenutni;

  while (red.length != 0) {
    trenutni = red.shift();

    var trenutnoPovezani = graf[trenutni];
    var indexSusjeda = [];
    var index = trenutnoPovezani.indexOf(1);
    while (index != -1) {
      indexSusjeda.push(index);
      index = trenutnoPovezani.indexOf(1, index + 1);
    }

    for (var j = 0; j < indexSusjeda.length; j++) {
      if (dužinaČvorova[indexSusjeda[j]] == Infinity) {
        dužinaČvorova[indexSusjeda[j]] = dužinaČvorova[trenutni] + 1;
        red.push(indexSusjeda[j]);
      }
    }
  }
  return dužinaČvorova[cilj];
}
