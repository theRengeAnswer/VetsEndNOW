function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

function main () {

var elements = document.getElementsByTagName('li');

for (var i=0, im=elements.length; im>i; i++) {
 var tables = elements[i];
 var childTables = tables.innerHTML
 result = childTables.match(/vet/i) ;
 if(result) {
       console.log("delete");
       tables.innerHTML= "</li>"
       //if indeed changes html we are mildly screwed
} 
else {
      ;
 }
}
}
 

sleep(2000).then(() => { main(); });
// sleep to let page load before DOM manipulation 