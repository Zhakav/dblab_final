package com.group4.dblab_final.web;

import com.group4.dblab_final.entity.Staff;
import com.group4.dblab_final.service.StaffService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/staff")
@CrossOrigin(origins = "http://localhost:3000")
public class StaffController {

    StaffService service;

    @GetMapping("/{id}")
    public ResponseEntity<Staff> get(@PathVariable UUID id){
        return new ResponseEntity<>(service.get(id),HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Staff> save(@RequestBody Staff staff){

        return new ResponseEntity<>(service.save(staff), HttpStatus.CREATED);

    }

    @PutMapping("")
    public ResponseEntity<Staff> update(@RequestBody Staff staff){

        return new ResponseEntity<>(service.update(staff), HttpStatus.CREATED);

    }

    @GetMapping("/all")
    public ResponseEntity<List<Staff>> getAll(){
        return new ResponseEntity<>(service.getAll(),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable UUID id) {

        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @DeleteMapping("/all")
    public ResponseEntity<HttpStatus> deleteAll(){
        service.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}