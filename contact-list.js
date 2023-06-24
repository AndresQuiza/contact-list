// Definir una lista de contactos con datos predefinidos
let contactList = [
    { name: "Juan Carvajal" },
    { name: "Lina Figueroa" },
    { name: "Paula Villegas" }
  ];
  
  // Función para añadir un nuevo contacto a la lista
  function addContact(firstName, lastName) {
    const newContact = {
      name: firstName + ' ' + lastName
    };
    contactList.push(newContact);
    console.log('Contacto añadido:', newContact);
  }
  
  // Función para borrar un contacto existente de la lista
  function deleteContact(index) {
    if (index >= 0 && index < contactList.length) {
      const deletedContact = contactList.splice(index, 1);
      console.log('Contacto borrado:', deletedContact[0]);
    } else {
      console.log('Índice inválido');
    }
  }
  
  // Función para imprimir los contactos presentes en la lista
  function printContacts() {
    console.log('Lista de contactos:');
    contactList.forEach((contact, index) => {
      console.log(index + ':', contact.name);
    });
  }
  
  // Ejemplo de uso
  printContacts();
  
  addContact('Laura', 'Martínez');
  printContacts();
  
  deleteContact(1);
  printContacts();