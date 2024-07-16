package com.group4.dblab_final.web;

import com.group4.dblab_final.entity.User;
import com.group4.dblab_final.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
    UserService service;


    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable UUID id){
        return new ResponseEntity<>(service.get(id), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> save( @RequestBody User user){
        service.save(user);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }
    @PutMapping("")
    public ResponseEntity<User> update(@RequestBody User user){

        return new ResponseEntity<>(service.update(user), HttpStatus.CREATED);

    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAll(){
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
