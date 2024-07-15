package com.group4.dblab_final.service;

import com.group4.dblab_final.entity.Staff;

import java.util.List;
import java.util.UUID;

public interface StaffService {

    public Staff save(Staff staff);
    public Staff update(Staff staff);
    public void  delete(UUID id);
    public void deleteAll();
    public Staff get(UUID id);
    public List<Staff> getAll();

}
