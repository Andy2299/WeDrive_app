import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onDelete, onFindAll, onFindById, onInsert, onUpdate } from '../controllers/apiCars';
import { storage } from '../Config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarTable from './CarTable';

// El resto del código


const initialValues = {
  marca: '',
  modelo: '',
  precio: '',
  autonomia: '',
};

export const onGetCars = async () => {
  const lstCars = await onFindAll();
  return lstCars.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const onUpdateCar = async (id) => {
  const docSeleccionado = await onFindById(id);
  return docSeleccionado;
};

export const onDeleteCar = async (id) => {
  try {
    await onDelete(id);
    return true;
  } catch (error) {
    return false;
  }
};

export const AdminCars = () => {
  /* AREA STATES */
  const [values, setValues] = useState(initialValues);
  const [currentId, setCurrentId] = useState('');
  const [image, setImage] = useState(null);
  const [items, setItems] = useState([]);

  const actualizarItems = async () => {
    const listaItems = await onGetCars();
    setItems(listaItems);
  };

  useEffect(() => {
    actualizarItems();
  }, []);

  /* AREA METODOS */
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
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
      let imageUrl = '';
  
      if (image) {
        const storageRef = ref(storage, `/images/${image.name}`);
        await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(storageRef);
      }
  
      const carData = { ...values, imageUrl };
  
      if (currentId === '') {
        await onInsert(carData);
        notifySuccess('Carro agregado con éxito');
      } else {
        await onUpdate(currentId, carData);
        notifySuccess('Carro actualizado con éxito');
      }
      setValues({ ...initialValues });
      setCurrentId('');
    } catch (error) {
      notifyError('Error al guardar o actualizar el carro');
    }
  };
  

  const handleEdit = async (id) => {
    setCurrentId(id);
    const car = await onUpdateCar(id);
    setValues({ ...car.data() });
  };

  const handleDelete = async (id) => {
    const confirmar = window.confirm('¿Está seguro que desea eliminar el carro?');
    if (confirmar) {
      const resultado = await onDeleteCar(id);
      if (resultado) {
        notifySuccess('Carro eliminado con éxito');
        await actualizarItems();
      } else {
        notifyError('Error al eliminar el carro');
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
        <h5>Carros</h5>
        <hr />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="marca"
              className="form-control mb-1"
              placeholder="Marca"
              value={values.marca}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="modelo"
              className="form-control mb-1"
              placeholder="Modelo"
              value={values.modelo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="precio"
              className="form-control mb-1"
              placeholder="Precio"
              value={values.precio}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="autonomia"
              className="form-control mb-1"
              placeholder="Autonomía"
              value={values.autonomia}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control mb-1"
              onChange={handleImageChange}
            />
          </div>
          <button className="btn btn-primary">
            {currentId === '' ? 'Guardar' : 'Modificar'}
          </button>
        </form>
      </div>
      {/* TABLE */}
      <div className="col-8">
        <h5>Lista de Carros</h5>
        <hr />
        <CarTable items={items} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  </div>
</>

);
};

export default AdminCars;