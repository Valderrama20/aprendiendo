package studenAdministrator.domain;

public class Student {

    // Atributos
    private int ID;
    private String name;
    private String email;
    private int age;
    private String curso;

    // Constructor
    public Student(int ID, String name, String email, int age, String curso) {
        this.ID = ID;
        this.name = name;
        this.email = email;
        this.age = age;
        this.curso = curso;
    }

    // Getters And setters
    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
}
