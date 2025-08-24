import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080', // Change to your backend base URL
});

// API endpoints
export const fetchStudents = (page = 0, size = 10) =>
    API.get(`/students/getAll?page=${page}&size=${size}`);

export const fetchStudent = (id) =>
    API.get(`/students/${id}`);

export const createStudent = (data) =>
    API.post(`/students/add`, data);

export const updateStudent = (id, data) =>
    API.put(`/students/update/${id}`, data);

export const deleteStudent = (id) =>
    API.delete(`/students/delete/${id}`);
