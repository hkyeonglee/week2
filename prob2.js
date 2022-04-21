const book={
    "name": "IMEN260-01",
    "chapter": "6. Duality theory",
    "list": [
      {"1":"The essence of duality theory"},
      {"2": "Primal-dual relationships"},
      {"3": "Adapting to other primal forms"}]
}
const fs=require('fs');
const textbook=JSON.stringify(book);
fs.writeFileSync('textbook.json',textbook)
