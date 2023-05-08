import React from 'react';
import './css/blogs.css'
const PostTable = ({ items, handleEdit, handleDelete }) => {
  return (

    <div className='containerBlogsCard'>
      <div className='BlogsCards'>
      {items.map((item) => (
        <div className='bodyblogs' >
          <div className='imgBlog'>
            {item.blogImage && (
            <img src={item.blogImage} alt={`Imagen del blog ${item.header}`} />
            )}
         </div>
         <div className='infoBlog'>
          <h5>Nuevo</h5>
          <h2>{item.header}</h2>
          <p>{item.message}</p>
         </div>
         <div className='autorInfo'>
          <div className='imgProfile'>
            {item.profileImage && (
              <img src={item.profileImage} alt={`Perfil de ${item.authorName}`} />
            )}
          </div>
          <div className='autorInfo2'>
            <p className='namePo'>{item.authorName}</p>
            <p>{item.date}</p>
          </div>
         </div>
        </div>

      ))}
      </div>
    </div>



    // <table className="table">
    //   <tbody>
    //     {items.map((item) => (
    //       <tr key={item.id}>
    //         <td>{item.header}</td>
    //         <td>{item.message}</td>
    //         <td>{item.authorName}</td>
    //         <td>{item.date}</td>
    //         <td>
    //           {item.profileImage && (
    //             <img src={item.profileImage} alt={`Perfil de ${item.authorName}`} style={{ width: "100px", height: "auto" }} />
    //           )}
    //         </td>
    //         <td>
    //           {item.blogImage && (
    //             <img src={item.blogImage} alt={`Imagen del blog ${item.header}`} style={{ width: "100px", height: "auto" }} />
    //           )}
    //         </td>
         
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default PostTable;