

// import React, { useEffect, useState } from 'react';
// import UserService from '../services/user.service';

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ username: '', role: '' });
//   const [editingUser, setEditingUser] = useState(null);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const response = await UserService.getAllUsers();
//     setUsers(response.data);
//   };

//   const handleCreate = async () => {
//     await UserService.createUser(newUser);
//     setNewUser({ username: '', role: '' });
//     loadUsers();
//   };

//   const handleEdit = async () => {
//     await UserService.updateUser(editingUser._id, editingUser);
//     setEditingUser(null);
//     loadUsers();
//   };

//   const handleDelete = async (id) => {
//     await UserService.deleteUser(id);
//     loadUsers();
//   };

//   const handleToggleBlock = async (id) => {
//     console.log('hello world')
//     await UserService.toggleBlockUser(id);
//     loadUsers();
//   };

//   return (
//     <div>
//       <h2>User Management</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={newUser.username}
//         onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Role"
//         value={newUser.role}
//         onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//       />
//       <button onClick={handleCreate}>Create User</button>

//       <ul>
//         {users.map(user => (
//           <li key={user._id}>
//             {user.username} - {user.roles.join(', ')} - Status: {user.block ? "Blocked" : "Active"}
//             <button onClick={() => setEditingUser(user)}>Edit</button>
//             <button onClick={() => handleDelete(user._id)}>Delete</button>
//             <button onClick={() => handleToggleBlock(user._id)}>
//               {user.block ? "Unblock" : "Block"}
//             </button>
//           </li>
//         ))}
//       </ul>

//       {editingUser && (
//         <div>
//           <h3>Edit User</h3>
//           <input
//             type="text"
//             value={editingUser.username}
//             onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
//           />
//           <input
//             type="text"
//             value={editingUser.roles.join(', ')}
//             onChange={(e) => setEditingUser({ ...editingUser, roles: [e.target.value] })}
//           />
//           <button onClick={handleEdit}>Update User</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserManagement;



import React, { useEffect, useState } from 'react';
import UserService from '../services/user.service';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', role: '' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await UserService.getAllUsers();
    setUsers(response.data);
  };

  const handleCreate = async () => {
    await UserService.createUser(newUser);
    setNewUser({ username: '', role: '' });
    loadUsers();
  };

  const handleEdit = async () => {
    await UserService.updateUser(editingUser._id, editingUser);
    setEditingUser(null);
    loadUsers();
  };

  const handleDelete = async (id) => {
    await UserService.deleteUser(id);
    loadUsers();
  };

  const handleToggleBlock = async (id) => {
    await UserService.toggleBlockUser(id);
    loadUsers();
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">User Management</h2>

      <div className="card p-4 mb-4">
        <h4>Add New User</h4>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={handleCreate}>
              Create User
            </button>
          </div>
        </div>
      </div>

      <ul className="list-group">
        {users.map((user) => (
          <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{user.username}</strong> - {user.roles.join(', ')} - 
              <span className={`badge ml-2 ${user.block ? 'badge-danger' : 'badge-success'}`}>
                {user.block ? "Blocked" : "Active"}
              </span>
            </div>
            <div>
              <button className="btn btn-warning btn-sm mx-1" onClick={() => setEditingUser(user)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(user._id)}>
                Delete
              </button>
              <button
                className={`btn btn-sm mx-1 ${user.block ? 'btn-success' : 'btn-secondary'}`}
                onClick={() => handleToggleBlock(user._id)}
              >
                {user.block ? "Unblock" : "Block"}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingUser && (
        <div className="card p-4 mt-4">
          <h4>Edit User</h4>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={editingUser.username}
                onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={editingUser.roles.join(', ')}
                onChange={(e) => setEditingUser({ ...editingUser, roles: [e.target.value] })}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-primary" onClick={handleEdit}>
                Update User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
