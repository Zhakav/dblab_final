package com.group4.dblab_final.entity;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@Table(name = "purchase_assistant")
public class PurchaseAssistant {

    public PurchaseAssistant(Staff staff){
        this.id=staff.getId();
        this.fname=staff.getFname();
        this.lname=staff.getLname();
        this.salary=staff.getSalary();
        this.birth_date=staff.getBirth_date();
        this.address=staff.getAddress();
        this.gender=staff.getGender();
        this.phone_number=staff.getPhone_number();
    }

    public UUID getId() {
        return id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    @Id
    @Column(name = "staff_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NonNull
    @Column(name = "fname" , nullable = false)
    private String fname;

    @NonNull
    @Column(name = "lname" , nullable = false)
    private String lname;

    @NonNull
    @Column(name = "salary" , nullable = false)
    private int salary;

    @NonNull
    @Column(name = "birth_date" , nullable = false)
    private Date birth_date;

    @Column(name = "address" )
    private String address;

    @Column(name = "gender" )
    private String gender;

    @Column(name = "email" )
    private String email;

    @Column(name = "phone_number" )
    private String phone_number;


}
