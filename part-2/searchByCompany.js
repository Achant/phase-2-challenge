var clients = require('./clients.json')
// search by company
for(i = 0; i < clients.length; i++) {
  if (clients[i].company.toUpperCase()
  .startsWith(process.argv[2].toUpperCase())){
    console.log(
      "id:", clients[i].id,
      "phone:", clients[i].phone,
      "company", clients[i].company
    )
  }
}
