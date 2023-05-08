import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onDelete, onFindAll, onFindById, onInsert, onUpdate } from '../controllers/apiBlog';
import { storage } from '../Config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostTable from './PostTable';

const initialValues = {
  header: '',
  message: '',
  authorName: '',
  date: '',
  profileImage: '',
  blogImage: '',
};

export const onGetPosts = async () => {
  const lstPosts = await onFindAll();
  return lstPosts.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const onUpdatePost = async (id) => {
  const docSeleccionado = await onFindById(id);
  return docSeleccionado;
};

export const onDeletePost = async (id) => {
  try {
    await onDelete(id);
    return true;
  } catch (error) {
    return false;
  }
};

export const AdminPosts = () => {
  const [values, setValues] = useState(initialValues);
  const [currentId, setCurrentId] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [blogImage, setBlogImage] = useState(null);
  const [items, setItems] = useState([]);

  const actualizarItems = async () => {
    const listaItems = await onGetPosts();
    setItems(listaItems);
  };

  useEffect(() => {
    actualizarItems();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleProfileImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleBlogImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBlogImage(e.target.files[0]);
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
      let profileImageUrl = '';
      let blogImageUrl = '';

      if (profileImage) {
        const storageRefProfileImage = ref(storage, `/images/${profileImage.name}`);
        await uploadBytes(storageRefProfileImage, profileImage);
        profileImageUrl = await getDownloadURL(storageRefProfileImage);
      }

      if (blogImage) {
        const storageRefBlogImage = ref(storage, `/images/${blogImage.name}`);
        await uploadBytes(storageRefBlogImage, blogImage);
        blogImageUrl = await getDownloadURL(storageRefBlogImage);
      }
  
      const postData = { ...values, profileImage: profileImageUrl, blogImage: blogImageUrl };

      if (currentId === '') {
        await onInsert(postData);
        notifySuccess('Entrada de blog agregada con éxito');
      } else {
        await onUpdate(currentId, postData);
        notifySuccess('Entrada de blog actualizada con éxito');
      }
      setValues({ ...initialValues });
      setCurrentId('');
      } catch (error) {
      notifyError('Error al guardar o actualizar la entrada de blog');
      }
      };

      const handleEdit = async (id) => {
        setCurrentId(id);
        const post = await onUpdatePost(id); // <-- Cambiar 'Post' a 'onUpdatePost'
        setValues({ ...post.data() });
      };

      // const handleEdit = async (id) => {
      //   setCurrentId(id);
      //   const post = await onUpdate
      // Post(id);
      // setValues({ ...post.data() });
      // };
      const handleDelete = async (id) => {
        const confirmar = window.confirm('¿Está seguro que desea eliminar la entrada de blog?');
        if (confirmar) {
      const resultado = await onDeletePost(id);
      if (resultado) {
      notifySuccess('Entrada de blog eliminada con éxito');
      await actualizarItems();
      } else {
      notifyError('Error al eliminar la entrada de blog');
      }
      }
      };
      return (
      <>
      <ToastContainer />
      <div className="container p-4">
      <div className="row">
      <div className="col-4">
      <h5>Entradas de blog</h5>
      <hr />
      <form onSubmit={onSubmit}>
      <div className="form-group">
      <input
                      type="text"
                      name="header"
                      className="form-control mb-1"
                      placeholder="Encabezado"
                      value={values.header}
                      onChange={handleInputChange}
                    />
      </div>
      <div className="form-group">
      <textarea
                      name="message"
                      className="form-control mb-1"
                      placeholder="Mensaje"
                      value={values.message}
                      onChange={handleInputChange}
                    ></textarea>
      </div>
      <div className="form-group">
      <input
                      type="text"
                      name="authorName"
                      className="form-control mb-1"
                      placeholder="Nombre del autor"
                      value={values.authorName}
                      onChange={handleInputChange}
                    />
      </div>
      <div className="form-group">
      <input
                      type="date"
                      name="date"
                      className="form-control mb-1"
                      value={values.date}
                      onChange={handleInputChange}
                    />
      </div>
      <div className="form-group">
      <input
                      type="file"
                      className="form-control mb-1"
                      onChange={handleProfileImageChange}
                    />
      </div>
      <div className="form-group">
      <input
                      type="file"
                      className="form-control mb-1"
                      onChange={handleBlogImageChange}
                    />
      </div>
      <button className="btn btn-primary">
      {currentId === '' ? 'Guardar' : 'Modificar'}
      </button>
      </form>
      </div>
      {/* TABLE */}
      <div className="col-8">
      <h5>Lista de Entradas de Blog</h5>
      <hr />
      <PostTable items={items} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
      </div>
      </div>
      </>
      );
      };

export default AdminPosts;