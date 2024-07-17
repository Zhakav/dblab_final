package com.group4.dblab_final.service;

import com.group4.dblab_final.Enumeration.StaffType;
import com.group4.dblab_final.entity.PurchaseAssistant;
import com.group4.dblab_final.entity.SalesAssistant;
import com.group4.dblab_final.entity.Staff;
import com.group4.dblab_final.exception.EntityNotFoundException;
import com.group4.dblab_final.repository.PurchaseAssistantRepository;
import com.group4.dblab_final.repository.SalesAssistantRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
public class StaffServiceImplementation implements StaffService {

    PurchaseAssistantRepository purchaseAssistantRepository;
    SalesAssistantRepository salesAssistantRepository;

    @Override
    public Staff save(Staff staff) {
        Staff savedStaff;
        if(Objects.equals(staff.getStaffType(), "Purchase Assistant"))
            savedStaff=new Staff(purchaseAssistantRepository.save(new PurchaseAssistant(staff)));
        else if (Objects.equals(staff.getStaffType(), "Sales Assistant"))
            savedStaff=new Staff(salesAssistantRepository.save(new SalesAssistant(staff)));
        else
            throw new RuntimeException("Invalid staff type");
        return savedStaff;

    }

    @Override
    public Staff update(Staff staff) {
        if(Objects.equals(staff.getStaffType(), "Purchase Assistant")) {
            purchaseAssistantRepository.deleteById(staff.getId());
            purchaseAssistantRepository.save(new PurchaseAssistant(staff));
        }
        else if(Objects.equals(staff.getStaffType(), "Sales Assistant")) {
            salesAssistantRepository.deleteById(staff.getId());
            salesAssistantRepository.save(new SalesAssistant(staff));
        }
        else
            throw new RuntimeException("ID does'nt exist in database");
        return staff;
    }

    @Override
    public void delete(UUID id) {
        if(purchaseAssistantRepository.existsById(id))
            purchaseAssistantRepository.deleteById(id);
        else if(salesAssistantRepository.existsById(id))
            salesAssistantRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        purchaseAssistantRepository.deleteAll();
        salesAssistantRepository.deleteAll();
    }

    @Override
    public Staff get(UUID id) {
        Staff staff;
        if(purchaseAssistantRepository.existsById(id))
            staff=new Staff(unwrapPurchaseAssistant(purchaseAssistantRepository.findById(id)));
        else
            staff=new Staff(unwrapSalesAssistant(salesAssistantRepository.findById(id)));
        return staff;
    }

    @Override
    public List<Staff> getAll() {
        List<Staff> staffList = new ArrayList<Staff>();
        purchaseAssistantRepository.findAll().forEach(purchaseAssistant -> {
            staffList.add(new Staff(purchaseAssistant));
        });

        // Only add SalesAssistant if not already added as PurchaseAssistant
        salesAssistantRepository.findAll().forEach(salesAssistant -> {
            if (!purchaseAssistantRepository.existsById(salesAssistant.getId())) {
                staffList.add(new Staff(salesAssistant));
            }
        });
        return staffList;
    }

    public static PurchaseAssistant unwrapPurchaseAssistant (Optional<PurchaseAssistant> purchaseAssistant ){

        if(purchaseAssistant.isPresent())
            return purchaseAssistant.get();
        else
            throw new RuntimeException();

    }

    public static SalesAssistant unwrapSalesAssistant (Optional<SalesAssistant> salesAssistant){

        if(salesAssistant.isPresent())
            return salesAssistant.get();
        else
            throw new RuntimeException();

    }
}
