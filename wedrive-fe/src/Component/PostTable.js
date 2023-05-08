import React from 'react';
import './css/PostTable.css'

const PostTable = ({ items, handleEdit, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Encabezado</th>
          <th>Mensaje</th>
          <th>Autor</th>
          <th>Fecha</th>
          <th>Imagen del perfil</th>
          <th>Imagen del blog</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.header}</td>
            <td>{item.message}</td>
            <td>{item.authorName}</td>
            <td>{item.date}</td>
            <td>
              {item.profileImage && (
                <img className='imgProfile' src={item.profileImage} alt={`Perfil de ${item.authorName}`} />
              )}
            </td>
            <td>
              {item.blogImage && (
                <img className='imgBlog' src={item.blogImage} alt={`Imagen del blog ${item.header}`}  />
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

export default PostTable;
