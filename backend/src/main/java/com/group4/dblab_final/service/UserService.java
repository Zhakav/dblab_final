package com.group4.dblab_final.service;

import com.group4.dblab_final.entity.Staff;
import com.group4.dblab_final.entity.User;

import java.util.List;
import java.util.UUID;

public interface UserService {

    public User save(User user);
    public User update(User user);
    public void  delete(UUID id);
    public void deleteAll();
    public User get(UUID id);
    public User getByUserName(String userName);
    public List<User> getAll();

}
