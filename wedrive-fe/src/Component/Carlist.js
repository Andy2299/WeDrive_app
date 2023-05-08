import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onDelete, onFindAll, onFindById, onInsert, onUpdate } from '../controllers/apiCars';
import { storage } from '../Config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarTable2 from './CarTable2';

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
  

 
  return (
    <>
  <ToastContainer />
  <div className="containerCardsCar ">
    <div className="row">
    
      {/* TABLE */}
      <div className="">
        <h5>Lista de Carros</h5>
        <hr />
        <CarTable2 items={items}/>
      </div>
    </div>
  </div>
</>

);
};

export default AdminCars;