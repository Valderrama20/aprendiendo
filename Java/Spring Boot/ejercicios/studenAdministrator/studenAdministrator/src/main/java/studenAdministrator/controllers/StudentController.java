package studenAdministrator.controllers;


import org.springframework.web.bind.annotation.*;
import studenAdministrator.domain.Student;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

//    private Student[] students = {
//            new Student(1, "Jose", "jose@gmail.com", 23, "DAW"),
//            new Student(2, "Ana", "ana@gmail.com", 22, "DAW"),
//            new Student(3, "Carlos", "carlos@gmail.com", 24, "DAM"),
//            new Student(4, "Lucia", "lucia@gmail.com", 21, "ASIR")
//    };

    private ArrayList<Student> students = new ArrayList<>(Arrays.asList(
            new Student(1, "Jose", "jose@gmail.com", 23, "DAW"),
            new Student(2, "Ana", "ana@gmail.com", 22, "DAW"),
            new Student(3, "Carlos", "carlos@gmail.com", 24, "DAM"),
            new Student(4, "Lucia", "lucia@gmail.com", 21, "ASIR")));

    /**
     * Endpoint para obtener todos los estudiantes
     *
     * @return Un array de estudiantes
     */

    @GetMapping
    public ArrayList<Student> getAllStudents() {
        return students;
    }

    @GetMapping("/{gmail}")
    public Student getStudentById(@PathVariable String gmail) {
        for (Student student : students) {
            if (student.getEmail().equalsIgnoreCase(gmail)) {
                return student;
            }
        }

        return null;
    }

    @PostMapping
    public Student postCreateStudent(@RequestBody Student student) {
        students.add(student);
        return student;
    }

    @PutMapping
    public Student putUpdateStudentById(@RequestBody Student student) {
        for (Student s : students) {
            if (s.getID() == student.getID()) {
                s.setName(student.getName());
                s.setEmail(student.getEmail());
                s.setAge(student.getAge());
                s.setCurso(student.getCurso());

                return s;
            }
        }

        return null;
    }

    @PatchMapping
    public Student patchUpdateStudentById(@RequestBody Student student) {
        for (Student s : students) {
            if (s.getID() == student.getID()) {

                if (student.getName() != null) {
                    s.setName(student.getName());
                }
                if (student.getEmail() != null) {
                    s.setEmail(student.getEmail());
                }
                if (student.getAge() != 0) {
                    s.setAge(student.getAge());
                }
                if (student.getCurso() != null) {
                    s.setCurso(student.getCurso());
                }

                return s;
            }
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public Student deleteStudentById(@PathVariable int id){
       for (Student student : students){
           if(student.getID() == id){
               students.remove(student);
               return student;
           }
       }

       return null;
    }
}
