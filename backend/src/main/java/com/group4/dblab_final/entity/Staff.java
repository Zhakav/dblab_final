package com.group4.dblab_final.entity;

import java.util.Date;
import java.util.UUID;

import com.group4.dblab_final.Enumeration.StaffType;
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



@NoArgsConstructor
@RequiredArgsConstructor
public class Staff {

    @Id
    @Column(name = "staff_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    public Staff(PurchaseAssistant purchaseAssistant){
        this.id=purchaseAssistant.getId();
        this.fname=purchaseAssistant.getFname();
        this.lname=purchaseAssistant.getLname();
        this.salary=purchaseAssistant.getSalary();
        this.birth_date=purchaseAssistant.getBirth_date();
        this.address=purchaseAssistant.getAddress();
        this.gender=purchaseAssistant.getGender();
        this.phone_number=purchaseAssistant.getPhone_number();
        this.email=purchaseAssistant.getEmail();
        this.staffType=StaffType.PURCHASE_ASSISTANT.toString();
    }

    public Staff(SalesAssistant salesAssistant){
        this.id=salesAssistant.getId();
        this.fname=salesAssistant.getFname();
        this.lname=salesAssistant.getLname();
        this.salary=salesAssistant.getSalary();
        this.birth_date=salesAssistant.getBirth_date();
        this.address=salesAssistant.getAddress();
        this.gender=salesAssistant.getGender();
        this.phone_number=salesAssistant.getPhone_number();
        this.email=salesAssistant.getEmail();
        this.staffType=StaffType.SALES_ASSISTANT.toString();
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

    public String getStaffType() {
        return staffType;
    }

    public void setStaffType(String staffType) {
        this.staffType = staffType;
    }

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

    private String staffType;

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }
}

