var margin = { top: 50, right: 10, bottom: 20, left: 120 },
  width = 960 - margin.right - margin.left,
  height = 900 - margin.top - margin.bottom;

var i = 0,
  animDuration = 500,
  root;

var tree = d3.layout.tree().size([height, width]);

var diagonal = d3.svg.diagonal().projection(function(d) {
  return [d.x, d.y];
});

d3.selection.prototype.moveToFront = function() {
  return this.each(function() {
    this.parentNode.appendChild(this);
  });
};

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
update(treeData[0]);

// Funkcija za resetovanje animacije (popunjava kružiće bijelom bojom)
function resetujAnimaciju(root) {
  d3.selectAll("circle")
    .transition()
    .duration(animDuration)
    .style("fill", "#fff");
}

function update(source) {
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  nodes.forEach(function(d) {
    d.y = d.depth * 100;
  });

  var node = svg.selectAll("g.node").data(nodes, function(d) {
    return d.id || (d.id = ++i);
  });

  var nodeEnter = node
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

  nodeEnter
    .append("circle")
    .attr("id", function(d) {
      return "node-" + d.id;
    })
    .attr("r", 10)
    .style("fill", "#fff");

  nodeEnter
    .append("text")
    .attr("y", function(d) {
      return d.children || d._children ? -20 : 20;
    })
    .attr("dy", ".35em")
    .attr("text-anchor", "start")
    .text(function(d) {
      return d.name;
    })
    .style("fill-opacity", 1);

  var link = svg.selectAll("path.link").data(links, function(d) {
    return d.target.id;
  });

  link
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", diagonal);

  d3.select("#nodes").moveToFront();
}

// Funkcija koja se poziva za svaki posjećeni čvor (mijenja boju čvora u crvenu)
function posjetiElement(element, animX) {
  d3.select("#node-" + element.id)
    .transition()
    .duration(animDuration)
    .delay(animDuration * animX)
    .style("fill", "red");
}

// Funkcija koja se poziva kada je pronađen čvor (mijenja mu boju u zelenu)
function findedElement(element, animX) {
  d3.select("#node-" + element.id)
    .transition()
    .duration(animDuration)
    .delay(animDuration * animX)
    .style("fill", "green");
}

function pokreniAnimaciju() {
  var queue = [];
  var animX = 0;
  queue.push(root);
  while (queue.length !== 0) {
    var element = queue.shift();
    posjetiElement(element, animX);
    animX = animX + 1;
    if (element.name === "G") {
      findedElement(element, animX);
      break;
    }

    if (element.children !== undefined) {
      for (var i = 0; i < element.children.length; i++) {
        queue.push(element.children[i]);
      }
    }
  }

  putanjaDoCilja(); // Prikaz podataka o putanji do cilja
  var rezultat = bfsAlgoritam(matricaSusjedstva, 7, 6);
  document.getElementById("rezultatAlgoritma").innerHTML =
    "Od grada S do grada G možemo proći kroz " +
    rezultat +
    " grada. Ovo je putanja koja prolazi kroz najmanji broj gradova, ne mora da znači da je najkraća.";
}

// Funkcija koja pokazuje putanju do cilja
function putanjaDoCilja() {
  var putanja = [];
  putanja.push(treeData[0].name);
  putanja.push(treeData[0].children[1].name);
  putanja.push(treeData[0].children[1].children[2].name);
  putanja.push(treeData[0].children[1].children[2].children[0].name);
  putanja.push(
    treeData[0].children[1].children[2].children[0].children[0].name
  );
  document.getElementById("putanja").innerHTML =
    "Putanja do cilja je: " + putanja;
}
