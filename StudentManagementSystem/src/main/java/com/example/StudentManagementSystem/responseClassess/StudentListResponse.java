package com.example.StudentManagementSystem.responseClassess;

import com.example.StudentManagementSystem.model.Student;

import java.util.List;

public class StudentListResponse {
    private boolean success;
    private String message;
    private List<Student> students;
    private int page;
    private int size;

    public StudentListResponse() {
    }

    public StudentListResponse(boolean success, String message, List<Student> students, int total, int page) {
        this.success = success;
        this.message = message;
        this.students = students;
        this.page = page;
        this.size = size;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
