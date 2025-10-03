export const BASE_URL = "http://localhost:5000"

// utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", //register a new user (Admin or Member)
        LOGIN: "/api/auth/login", //Autheticate user & return JWT token
        GET_PROFILE: "/api/auth/profile", //Get logged-in user details
    },

    USERS: {
        GET_ALL_USERS: "/api/users", //Get all users (Admin only)
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`, //Get user by ID
        CREATE_USER: "/api/users", //Create a new user (Admin only)
        UPDATE_USER: (userId) => `/api/users/${userId}`, //Update user details
        DELETE_USER: (userId) => `/api/users/${userId}` //Delete a user
    },

    TASKS {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", //Get Dashboard Data
        
    }
}