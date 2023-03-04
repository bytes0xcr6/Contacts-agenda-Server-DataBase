const mysql = require("mysql");
let allContacts;

// Create the CONNECTOR with the Agenda_contactos DB
const connectorAgenda = mysql.createConnection({
  host: "localhost",
  user: "Cristian",
  password: "",
  database: "agenda_contactos",
});

// Instance the CONNECTION.
const connection = () => {
  connectorAgenda.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("Connected!");
  });
};

const addContact = (name, number) => {
  const sql = `INSERT INTO agenda (id_agenda, nombre_contacto, numero_contacto) VALUES (${null}, "${name}", ${number})`;

  connectorAgenda.query(sql, (err, result, filed) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
  });
};

const getContacts = () => {
  const sql = "SELECT * FROM agenda";
  connectorAgenda.query(sql, (err, result, filed) => {
    allContacts = result;
    if (err) {
      throw err;
    }
  });
  return allContacts;
};

const deleteContacts = (id) => {
  const sql = `DELETE FROM agenda where id_agenda=${id}`;

  connectorAgenda.query(sql, (err, result, filed) => {
    if (err) {
      throw err;
    }
    console.log(`Contact deleted with ID ${id}`);
  });
};

module.exports = { addContact, getContacts, deleteContacts };
