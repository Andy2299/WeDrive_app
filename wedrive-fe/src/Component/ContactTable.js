// ContactTable.js
import React from 'react';

const ContactTable = ({ contactos }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          {/* Otros encabezados de la tabla */}
        </tr>
      </thead>
      <tbody>
        {contactos.map((contacto) => (
          <tr key={contacto.id}>
            <td>{contacto.nombre}</td>
            <td>{contacto.apellido}</td>
            <td>{contacto.correo}</td>
            {/* Otros datos del contacto */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
