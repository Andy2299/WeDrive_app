import React from 'react';

const CarTable = ({ items, handleEdit, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Autonomía</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.marca}</td>
            <td>{item.modelo}</td>
            <td>{item.precio}</td>
            <td>{item.autonomia}</td>
            <td>
              {item.imageUrl && (
                <img src={item.imageUrl} alt={`${item.marca} ${item.modelo}`} style={{ width: "100px", height: "auto" }} />
              )}
            </td>
            <td>
              <button className="btn btn-sm btn-warning" onClick={() => handleEdit(item.id)}>
                Editar
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarTable;
