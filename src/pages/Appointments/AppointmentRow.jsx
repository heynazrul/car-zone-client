import React from 'react';
import Swal from 'sweetalert2';

const AppointmentRow = ({ appointment, handleDelete, handleStatus }) => {
  const { _id, img, customerName, email, date, service, price, status } = appointment;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn-error btn-sm btn-circle btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className=" h-24 w-24 rounded">
            <img
              src={img}
              alt=""
            />
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{service}</div>
          <div className="text-sm opacity-50">Color: Black</div>
          <div className="text-sm opacity-50">Size: S</div>
        </div>
      </td>
      <td>
        <p className="font-bold">{`$` + price}</p>
      </td>
      <td>
        <p className="font-bold">{date}</p>
      </td>
      <th>
        {
          status === 'confirm' ? <span className='btn-success btn btn-xs'>Confirmed</span> :
          <button
            onClick={() => handleStatus(_id)}
            className="btn-warning btn-xs btn">
            Pending
          </button>
        }
      </th>
    </tr>
  );
};

export default AppointmentRow;
