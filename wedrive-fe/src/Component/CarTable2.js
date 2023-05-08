import React from 'react';



const CarTable = ({ items, handleEdit, handleDelete }) => {
  return (

<div className='containerCarts'>
  <div className='row'>
    {items.map((item) => (
      <div className='col-6 col-md-3  my-3'>
        <div className='bodyCarts'>
          {item.imageUrl && (
            <img src={item.imageUrl} alt={`${item.marca} ${item.modelo}`} />
          )}
          <div className='infoCar'>
            <div className='textCar'>
              <p>Marca</p>
              <p>{item.marca}</p>
            </div>
            <div className='textCar color'>
              <p>Modelo</p>
              <p>{item.modelo}</p>
            </div>
            <div className='textCar'>
              <p>Precio</p>
              <p>{item.precio}</p>
            </div>
            <div className='textCar color'>
              <p>Autonomía</p>
              <p>{item.autonomia}</p>
            </div>
            <a className='btn' href=''>
              Ver más
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>






    // <table className="table">

    //   <thead>
    //     <tr>
    //       <th>Imagen</th>
    //       <th>Marca</th>
    //       <th>Modelo</th>
    //       <th>Precio</th>
    //       <th>Autonomía</th>
  
  
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {items.map((item) => (
    //       <tr key={item.id}>
    //          <td>
    //           {item.imageUrl && (
    //             <img src={item.imageUrl} alt={`${item.marca} ${item.modelo}`} style={{ width: "100px", height: "auto" }} />
    //           )}
    //         </td>
    //         <td>{item.marca}</td>
    //         <td>{item.modelo}</td>
    //         <td>{item.precio}</td>
    //         <td>{item.autonomia}</td>
           
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default CarTable;
