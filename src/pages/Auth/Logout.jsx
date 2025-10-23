import React, { useEffect, useContext, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { UserContext } from '../../context/userContext'
import Modal from '../../components/Modal'

const Logout = () => {
  const { logoutUser } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(true)

  const confirmLogout = async () => {
    await logoutUser()
    setIsOpen(false)
  }

  const cancelLogout = () => {
    setIsOpen(false)
    // navigate back to dashboard or previous page by using window.history
    window.history.back()
  }

  return (
    <DashboardLayout activeMenu="Log Out">
      <Modal isOpen={isOpen} onClose={cancelLogout} title="Confirm Logout">
        <p className="text-sm">Are you sure you want to log out?</p>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={confirmLogout}
            className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium text-rose-500 whitespace-nowrap bg-rose-50 border border-rose-100 rounded-lg px-4 py-2 cursor-pointer mr-2"
          >
            Log Out
          </button>

          <button
            type="button"
            onClick={cancelLogout}
            className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </DashboardLayout>
  )
}

export default Logout
