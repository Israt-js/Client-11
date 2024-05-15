// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Assignment = () => {
//   const [assignments, setAssignments] = useState([]);
//   const handleDelete = _id => {
//     console.log(_id)
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//         fetch(`http://localhost:5000/touristsSpots/${_id}`, {
//             method:'DELETE'
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if(data.deleteCount > 0) {
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your add country has been deleted.",
//             icon: "success"
//           });
//           const remaining = toure.filter(up => up._id !== _id)
//           setToure(remaining);
//             }
//         })
//         }
//       });
//    }

//   useEffect(() => {
//     const fetchAssignments = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/createAssign');
//         const data = await response.json();
//         setAssignments(data);
//       } catch (error) {
//         console.error('Error fetching assignments:', error);
//       }
//     };

//     fetchAssignments();
//   }, []);

//   return (
//     <div>
//       <div className="assignments-container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-8">
//         {assignments.map((assignment) => (
//            <div className="card w-96 bg-base-100 shadow-xl mb-6 ">
//            <figure className="px-10 pt-10">
//              <img src={assignment.thumbnailUrl} alt={assignment.title} className="rounded-xl h-[350px] w-[400px]" />
//            </figure>
//            <div className="card-body items-center text-center">
//              <h2 className="card-title">{assignment.title}</h2>
//              <p>Difficulty: {assignment.difficulty}</p>
//            </div>
//            <div className="card-actions">
//               <Link to={`/update/${assignment._id}`}><button className="bg-slate-700 p-2 m-4 text-white rounded-md border-none">Update</button></Link>
//               <button className="bg-slate-700 p-2 m-4 text-white rounded-md border-none" onClick={() => handleDelete(list._id)}>Delete</button>
//               <button onClick={() => handleView(assignment._id)}>View</button>
//            </div>
//          </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Assignment;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);

  const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristsSpots/${_id}`, {
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deleteCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your add country has been deleted.",
              icon: "success"
            });
            const remaining = assignments.filter(up => up._id !== _id)
            setAssignments(remaining);
          }
        })
      }
    });
  }

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch('http://localhost:5000/createAssign');
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div>
      <div className="assignments-container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-8">
        {assignments.map((assignment) => (
          <div className="card w-96 bg-base-100 shadow-xl mb-6" key={assignment._id}>
            <figure className="px-10 pt-10">
              <img src={assignment.thumbnailUrl} alt={assignment.title} className="rounded-xl h-[350px] w-[400px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{assignment.title}</h2>
              <p>Difficulty: {assignment.difficulty}</p>
            </div>
            <div className="card-actions">
              <Link to={`/update/${assignment._id}`}>
                <button className="bg-slate-700 p-2 m-4 text-white rounded-md border-none">Update</button>
              </Link>
              <button className="bg-slate-700 p-2 m-4 text-white rounded-md border-none" onClick={() => handleDelete(assignment._id)}>Delete</button>
              <button onClick={() => handleView(assignment._id)}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment;
