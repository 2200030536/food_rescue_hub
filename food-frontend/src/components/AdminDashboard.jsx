import React from 'react'
import AdminHeader from "./AdminHeader";
import AdminProfile from './AdminProfile';

const AdminDashboard = () => {
  return (
    <>
    <AdminHeader/>
    <div>
      <AdminProfile/>
      ADMIN login success
    </div>
    </>
  )
}

export default AdminDashboard
