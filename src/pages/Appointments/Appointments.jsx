import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import AppointmentRow from './AppointmentRow';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const url = `http://localhost:5000/appointments?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-zone-access-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setAppointments(data);
        } else {
          navigate('/');
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/appointments/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your appointment has been deleted.', 'success');
              const remaining = appointments.filter((appointment) => appointment._id !== id);
              setAppointments(remaining);
            }
          });
      }
    });
  };

  const handleStatus = (id) => {
    fetch(`http://localhost:5000/appointments/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = appointments.filter((appointment) => appointment._id !== id);
          const updated = appointments.find((appointment) => appointment._id === id);
          updated.status = 'confirm';

          const newAppointments = [updated, ...remaining];
          setAppointments(newAppointments);
        }
      });
  };

  return (
    <div>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                  />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <AppointmentRow
                key={appointment._id}
                appointment={appointment}
                handleDelete={handleDelete}
                handleStatus={handleStatus}></AppointmentRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
