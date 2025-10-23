import React, { createContext, useState, useEffect } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); //New state to track loading

    useEffect(() => {
        if(user) return;

        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            setLoading(false);
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
                setUser(response.data);
            } catch (error) {
                console.error("User not authenticated", error);
                clearUser();
            } finally {
                setLoading(false)
            }
        };

        fetchUser();
    }, []);

    const updateUser = (userData) => {
        setUser(userData);
        // store accessToken if provided on userData, otherwise don't overwrite
        if (userData?.accessToken) {
            localStorage.setItem("accessToken", userData.accessToken);
        }
        setLoading(false)
    };

    const clearUser = () => {
        setUser(null);
        localStorage.removeItem("accessToken");
    };

     const logoutUser = async () => {
    try {
      await axiosInstance.post(API_PATHS.AUTH.LOGOUT, {}, { withCredentials: true });
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    } finally {
      localStorage.removeItem("accessToken");
      setUser(null);
      window.location.href = "/login";
    }
  };

    return (
        <UserContext.Provider value={{ user, loading, updateUser, clearUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider
