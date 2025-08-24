package com.example.StudentManagementSystem.service;

import com.example.StudentManagementSystem.model.Student;
import com.example.StudentManagementSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public Student getStudentByRollNo(int rollNo) {
        return repo.findById(rollNo).orElse(null);
    }

    public Page<Student> getAllStudent(int page, int size) {
        return repo.findAll(PageRequest.of(page, size, Sort.by("name").ascending()));
    }

    public Student addStudent(Student student) {
        return repo.save(student);
    }

    public Student updateStudent(int rollNo, Student student) {
        Student present = repo.findById(rollNo).orElse(null);
        if(present != null){
            return repo.save(student);
        }
        else {
            return null;
        }
    }

    public String deleteStudent(int rollNo) {
        Student present = repo.findById(rollNo).orElse(null);
        if(present != null){
             repo.deleteById(rollNo);
             return "success";
        }
        else {
            return "no record found";
        }
    }
}
