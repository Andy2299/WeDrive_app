// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { onDelete, onFindAll, onFindById, onInsert, onUpdate } from '../controllers/apiContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactTable from './ContactTable';

const initialValues = {
  nombre: '',
  apellido: '',
  correo: '',
  sexo: '',
  direccion: '',
  telefono: '',
  edad: 0,
};

export const onGetContactos = async () => {
  const lstContactos = await onFindAll();
  return lstContactos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const onUpdateContacto = async (id) => {
  const docSeleccionado = await onFindById(id);
  return docSeleccionado;
};

export const onDaleteContacto = async (id) => {
  try {
    await onDelete(id);
    return true;
  } catch (error) {
    return false;
  }
};

export const AppCrud = () => {
  /* AREA STATES */
  const [values, setValues] = useState(initialValues);
  const [currentId, setCurrentId] = useState('');
  // listado
  const [contactos, setContactos] = useState([]);

  // Función para actualizar la lista de contactos
  const actualizarContactos = async () => {
    const listaContactos = await onGetContactos();
    setContactos(listaContactos);
  };
  // useEffect para actualizar la lista de contactos al montar el componente y cuando se actualice
    useEffect(() => {
      actualizarContactos();
    }, []);

  /* AREA METODOS */
  const handelInputChange = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyWarning = (message) => {
    toast.warning(message);
  };

  const notifyError = (message) => {
    toast.error(message);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      if (currentId === '') {
        await onInsert(values);
        notifySuccess('Contacto agregado con éxito');
      } else {
        await onUpdate(currentId, values);
        notifySuccess('Contacto actualizado con éxito');
      }
      setValues({ ...initialValues });
      setCurrentId('');
    } catch (error) {
      notifyError('Error al guardar o actualizar el contacto');
    }
  };


  const handleEdit = async (id) => {
    setCurrentId(id);
    const contacto = await onUpdateContacto(id);
    setValues({ ...contacto.data() });
  };
  
  const handleDelete = async (id) => {
    const confirmar = window.confirm('¿Está seguro que desea eliminar el contacto?');
    if (confirmar) {
      const resultado = await onDaleteContacto(id);
      if (resultado) {
        notifySuccess('Contacto eliminado con éxito');
        await actualizarContactos();
      } else {
        notifyError('Error al eliminar el contacto');
      }
    }
  };
  


  return (
    <>
      <ToastContainer />
      <div className="container p-4">
        <div className="row">
          {/* FORM */}
          <div className="col-4">
            <h5>Contactos</h5>
            <hr />
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  className="form-control mb-1"
                  placeholder="Nombre"
                  value={values.nombre}
                  onChange={handelInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="apellido"
                  className="form-control mb-1"
                  placeholder="Apellidos"
                  value={values.apellido}
                  onChange={handelInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="correo"
                  className="form-control mb-1"
                  placeholder="Correo"
                  value={values.correo}
                  onChange={handelInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="sexo"
                  className="form-control mb-1"
                  placeholder="Sexo"
                  value={values.sexo}
                  onChange={handelInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="direccion"
                  className="form-control mb-1"
                  placeholder="Dirección"
                  value={values.direccion}
                  onChange={handelInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="telefono"
                  className="form-control mb-1"
                  placeholder="Teléfono"
                  value={values.telefono}
                  onChange={handelInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="edad"
                  className="form-control mb-1"
                  placeholder="Edad"
                  value={values.edad}
                  onChange={handelInputChange}
                />
              </div>
              <button className="btn btn-primary">
                {currentId === '' ? 'Guardar' : 'Modificar'}
              </button>
            </form>
          </div>
        {/* TABLE */}
        <div className="col-8">
          <h5>Lista de Clientes</h5>
          <hr />
       
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Sexo</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((contacto) => (
                <tr key={contacto.id}>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.apellido}</td>
                  <td>{contacto.correo}</td>
                  <td>{contacto.sexo}</td>
                  <td>{contacto.direccion}</td>
                  <td>{contacto.telefono}</td>
                  <td>{contacto.edad}</td>
                  <td>
                    <button className="btn  mr-2" onClick={() => handleEdit(contacto.id)}>
                      Editar
                    </button>
                    <button className="btn" onClick={() => handleDelete(contacto.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>

            
        </div>
      </div>
    </>
  );
  
};
