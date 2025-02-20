// import React, { useEffect, useState } from 'react';
// import { Outlet, useNavigate } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
// import { FaHome, FaUser, FaBriefcase, FaDollarSign, FaSignOutAlt, FaProjectDiagram, FaHistory, FaLock } from 'react-icons/fa';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ProfilePic from '../Admin/ProfilePic';


// const EmployeeNavBar = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState(''); // State to store the username
//   const [role, setRole] = useState('Employee'); // Default role is 'Employee'
//   const [gender, setGender] = useState('Employee'); // Default role is 'Employee'
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [hoveredLink, setHoveredLink] = useState(null); // State to manage the hovered link
//   const [activeLink, setActiveLink] = useState('dashboard'); // Default active link


//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:1010/adminuser/get-profile', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (response.data.statusCode === 200) {

//           const { fullName, role , gender} = response.data.ourEmployee;
//           setUsername(fullName);
//           if (role === 'USER') {
//             setRole('Employee');
//             setGender(gender);
//           }
//           setLoading(false);
//         } else {
//           navigate('/error');
//         }


//       } catch (error) {
//         // console.error('Error fetching profile:', error);
//         setError('Failed to fetch profile. Please try again later.');
//         setLoading(false);
//         navigate('/error');
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     localStorage.removeItem('role');
//     navigate('/login');
//   };

//   const navLinks = [
//     { to: '/user/dashboard', icon: <FaHome className="me-2" />, label: 'Dashboard', key: 'dashboard' },
//     { to: '/user/profile', icon: <FaUser className="me-2" />, label: 'Profile', key: 'profile' },
//     { to: '/user/professional', icon: <FaBriefcase className="me-2" />, label: 'Professional', key: 'professional' },
//     { to: '/user/projects', icon: <FaProjectDiagram className="me-2" />, label: 'Projects', key: 'projects' },
//     { to: '/user/history', icon: <FaHistory className="me-2" />, label: 'History', key: 'history' },
//     { to: '/user/finance', icon: <FaDollarSign className="me-2" />, label: 'Finance', key: 'finance' },
//     { to: '/user/password-reset', icon: <FaLock className="me-2" />, label: 'Reset Password', key: 'reset-password' },
//   ];

//   return (
//     <div className="d-flex" >
//       {/* Sidebar */}
//       <div className="d-flex flex-row align-items-center" style={{ height: '100vh', width: '250px', position: 'fixed', top: 0, left: 0, overflowY: 'auto', background: 'linear-gradient(200deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 101%, rgba(2,0,36,1) 100%)', boxShadow: '2px 0 70px rgba(0, 0, 0, 0.7)' }}>
//         <div className="text-center p-3 d-flex flex-column align-items-center" style={{ marginBottom: '30px', color: '#F0F0F0' }}>
//           {/* Profile Pic Uploader */}
//           <ProfilePic gender={gender}/>
//           <p className="mb-0 fs-4">{username}</p>
//           <p className="mb-0">{role}</p>
//         </div>
//         <ul className="nav flex-column nav-blur" style={{ overflow: 'hidden' }}>
//           {navLinks.map(({ to, icon, label, key }) => (
//             <li className="nav-item p-2" key={key}>
//               <NavLink
//                 className="nav-link"
//                 to={to}
//                 end
//                 activeClassName="active"
//                 onMouseEnter={() => setHoveredLink(key)}
//                 onMouseLeave={() => setHoveredLink(null)}
//                 onClick={() => setActiveLink(key)}
//                 style={{
//                   color: hoveredLink === key || activeLink === key ? '#FFD700' : '#F0F0F0',
//                   transition: 'color 0.3s',
//                 }}
//               >
//                 {icon} {label}
//               </NavLink>
//             </li>
//           ))}
//           <li className="nav-item p-2 mt-2">
//             <button className="nav-link" onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#F0F0F0', cursor: 'pointer' }}>
//               <FaSignOutAlt className="me-2 fs-4" /> Logout
//             </button>
//           </li>
//         </ul>
//       </div>
//       {/* Main content */}
//       <div className="flex-grow-1" style={{ marginLeft: '250px', padding: '20px' }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default EmployeeNavBar;




import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaDollarSign, FaSignOutAlt, FaProjectDiagram, FaHistory, FaLock } from 'react-icons/fa';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from '../Admin/ProfilePic';

const EmployeeNavBar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('Employee');
  const [gender, setGender] = useState('Employee');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState('dashboard');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:1010/adminuser/get-profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data.statusCode === 200) {
          const { fullName, role, gender } = response.data.ourEmployee;
          setUsername(fullName);
          setRole(role === 'USER' ? 'Employee' : role);
          setGender(gender);
        } else {
          navigate('/error');
        }
      } catch (error) {
        navigate('/error');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navLinks = [
    { to: '/user/dashboard', icon: <FaHome />, label: 'Dashboard', key: 'dashboard' },
    { to: '/user/profile', icon: <FaUser />, label: 'Profile', key: 'profile' },
    { to: '/user/professional', icon: <FaBriefcase />, label: 'Professional', key: 'professional' },
    { to: '/user/projects', icon: <FaProjectDiagram />, label: 'Projects', key: 'projects' },
    { to: '/user/history', icon: <FaHistory />, label: 'History', key: 'history' },
    { to: '/user/finance', icon: <FaDollarSign />, label: 'Finance', key: 'finance' },
    { to: '/user/password-reset', icon: <FaLock />, label: 'Reset Password', key: 'reset-password' },
  ];

  return (
    <div>
      {/* Navbar Container */}
      <nav className="fixed-top d-flex flex-row justify-content-between align-items-center px-4 py-3 shadow"
        style={{
          background: 'linear-gradient(90deg, rgb(61, 142, 61) 0%, rgb(116, 116, 217) 100%)',
          color: '#F0F0F0'
        }}>
        
        {/* Left - Profile */}
        <div className="d-flex align-items-center flex-grow-1" >
          <ProfilePic gender={gender} />
          <div className="ms-2">
            <p className="mb-0 fs-5">{username}</p>
            <p className="mb-0 small">{role}</p>
          </div>
        </div>

        {/* Center - Navigation Links (Evenly Spaced) */}
        <div className="d-flex flex-grow-2 justify-content-center">
          <ul className="nav">
            {navLinks.map(({ to, icon, label, key }) => (
              <li className="nav-item px-3" key={key}>
                <NavLink
                  className="nav-link text-light"
                  to={to}
                  end
                  activeClassName="active"
                  onMouseEnter={() => setHoveredLink(key)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setActiveLink(key)}
                  style={{
                    color: hoveredLink === key || activeLink === key ? '#FFD700' : '#F0F0F0',
                    transition: 'color 0.3s',
                  }}
                >
                  {icon} <span className="ms-1">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Logout Button */}
        <div className="d-flex flex-grow-1 justify-content-end">
          <button className="btn btn-danger" onClick={handleLogout}>
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      </nav>

      {/* Main Content - Push Down to Avoid Overlap */}
      <div className="container mt-5 pt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeNavBar;
