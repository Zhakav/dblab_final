package com.group4.dblab_final.entity;

import java.util.Date;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@Table(name = "admin_types")
public class purchase_assistant {

    @Id
    @Column(name = "staff_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    @Column(name = "fname" , nullable = false)
    private String fname;

    @NonNull
    @Column(name = "salary" , nullable = false)
    private int salary;

    @NonNull
    @Column(name = "birth_date" , nullable = false)
    private Date birth_date;

    @Column(name = "address" )
    private Date address;

    @Column(name = "gender" )
    private String gender;

    @Column(name = "email" )
    private String email;

    @Column(name = "phone_number" )
    private String phone_number;


}
