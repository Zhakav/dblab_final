package com.group4.dblab_final.repository;

import com.group4.dblab_final.entity.SalesAssistant;
import com.group4.dblab_final.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {
    Optional<User> findByUsername(String username);
}
