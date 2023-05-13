import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import AppointmentRow from './AppointmentRow';
import Swal from 'sweetalert2';

const Appointments = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  const url = `http://localhost:5000/appointments?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

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
                handleDelete={handleDelete}></AppointmentRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
