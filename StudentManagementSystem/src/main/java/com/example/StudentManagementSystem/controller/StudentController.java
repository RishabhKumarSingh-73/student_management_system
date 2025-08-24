package com.example.StudentManagementSystem.controller;

import com.example.StudentManagementSystem.model.Student;
import com.example.StudentManagementSystem.responseClassess.DeleteStudentResponse;
import com.example.StudentManagementSystem.responseClassess.StudentListResponse;
import com.example.StudentManagementSystem.responseClassess.StudentResponse;
import com.example.StudentManagementSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping
    public String helloWorld(){
        return "Hello World";
    }

    @GetMapping("/{rollNo}")
    public ResponseEntity<StudentResponse> getStudentByRollNo(@PathVariable int rollNo){
        Student student =  service.getStudentByRollNo(rollNo);
        if(student != null){
            return ResponseEntity.ok(new StudentResponse(true,"Student found",student));
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new StudentResponse(false,"Student not found",null));
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<StudentListResponse> getAllStudent(@RequestParam int page, @RequestParam int size){
        Page<Student> students =  service.getAllStudent(page,size);
        return ResponseEntity.ok(new StudentListResponse(true,"returned all students",students.toList(),page,size));
    }

    @PostMapping("/add")
    public ResponseEntity<StudentResponse> addStudent(@RequestBody Student student){
        Student present =  service.addStudent(student);
        if(present != null){
            return ResponseEntity.ok(new StudentResponse(true,"added successfully",present));
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new StudentResponse(false,"adding failed",null));
        }
    }

    @PutMapping("/update/{rollNo}")
    public ResponseEntity<StudentResponse> updateStudent(@RequestBody Student student,@PathVariable int rollNo){
        Student present =  service.updateStudent(rollNo,student);
        if(present != null){
            return ResponseEntity.ok(new StudentResponse(true,"updated successfully",present));
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new StudentResponse(false,"Not Found",null));
        }
    }

    @DeleteMapping("/delete/{rollNo}")
    public ResponseEntity<DeleteStudentResponse> deleteStudent(@PathVariable int rollNo){
        String present =  service.deleteStudent(rollNo);
        if(present == "success"){
            return ResponseEntity.ok(new DeleteStudentResponse(true,"deleted successfully",rollNo));
        }
        else {
            return ResponseEntity.ok(new DeleteStudentResponse(false,"student not found",rollNo));
        }

    }
}
