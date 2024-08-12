import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'

function logoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        .catch(
            console.log('error')
        )
    }
  return (
    <div>logoutBtn</div>
  )
}

export default logoutBtn