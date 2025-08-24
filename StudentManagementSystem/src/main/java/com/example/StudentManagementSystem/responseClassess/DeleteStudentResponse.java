package com.example.StudentManagementSystem.responseClassess;

public class DeleteStudentResponse {
    private boolean success;
    private String message;
    private int rollNo;

    public DeleteStudentResponse() {
    }

    public DeleteStudentResponse(boolean success, String message, int rollNo) {
        this.success = success;
        this.message = message;
        this.rollNo = rollNo;
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

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }
}
