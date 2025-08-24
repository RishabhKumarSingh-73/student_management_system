package com.example.StudentManagementSystem.responseClassess;

import com.example.StudentManagementSystem.model.Student;

public class StudentResponse {
    private boolean success;
    private String message;
    private Student student;

    public StudentResponse() {
    }

    public StudentResponse(boolean success, String message, Student student) {
        this.success = success;
        this.message = message;
        this.student = student;
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

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
