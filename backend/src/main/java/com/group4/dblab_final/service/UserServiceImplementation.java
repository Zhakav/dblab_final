package com.group4.dblab_final.service;

import com.group4.dblab_final.entity.SalesAssistant;
import com.group4.dblab_final.entity.User;
import com.group4.dblab_final.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class UserServiceImplementation implements UserService{

    UserRepository userRepository;
    @Lazy
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImplementation(UserRepository repository,@Lazy BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository=repository;
        this.bCryptPasswordEncoder=bCryptPasswordEncoder;
    }

    @Override
    @Transactional
    public User save( User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User update(User user) {
        if(userRepository.existsById(user.getId())) {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            return userRepository.save(user);
        }
        else
            throw new RuntimeException("Id not found");
    }

    @Override
    public void delete(UUID id) {
        if(userRepository.existsById(id))
             userRepository.deleteById(id);
        else
            throw new RuntimeException("Id not found");
    }

    @Override
    public void deleteAll() {
        userRepository.deleteAll();;
    }

    @Override
    public User get(UUID id) {
        return unwrap(userRepository.findById(id));
    }

    @Override
    public User getByUserName(String userName) {
        return unwrap(userRepository.findByUsername(userName));
    }

    @Override
    public List<User> getAll() {
        if (userRepository.count()!=0)
            return new ArrayList<>((Collection) userRepository.findAll());
        else
            return new ArrayList<>();
    }

    public static User unwrap (Optional<User> user){

        if(user.isPresent())
            return user.get();
        else
            throw new RuntimeException();

    }
}
