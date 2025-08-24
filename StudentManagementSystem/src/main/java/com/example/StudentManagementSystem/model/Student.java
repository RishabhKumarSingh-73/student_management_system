package com.example.StudentManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.sql.Date;

@Entity
public class Student {
    @Id
    private int rollNo;
    private String name;
    private String address;
    private java.sql.Date dob;
    private double cgpa;
    private int currentSemester;
    private long phoneNo;
    private String email;
    private double sslcPercentage;
    private double hscPercentage;

    public Student() {
    }

    public Student(int rollNo, String name, String address, Date dob, double cgpa, int currentSemester, long phoneNo, String email, double sslcPercentage, double hscPercentage) {
        this.rollNo = rollNo;
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.cgpa = cgpa;
        this.currentSemester = currentSemester;
        this.phoneNo = phoneNo;
        this.email = email;
        this.sslcPercentage = sslcPercentage;
        this.hscPercentage = hscPercentage;
    }

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }

    public int getCurrentSemester() {
        return currentSemester;
    }

    public void setCurrentSemester(int currentSemester) {
        this.currentSemester = currentSemester;
    }

    public long getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(long phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getSslcPercentage() {
        return sslcPercentage;
    }

    public void setSslcPercentage(double sslcPercentage) {
        this.sslcPercentage = sslcPercentage;
    }

    public double getHscPercentage() {
        return hscPercentage;
    }

    public void setHscPercentage(double hscPercentage) {
        this.hscPercentage = hscPercentage;
    }
}
