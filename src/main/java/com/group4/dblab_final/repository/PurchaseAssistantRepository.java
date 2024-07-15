package com.group4.dblab_final.repository;

import com.group4.dblab_final.entity.PurchaseAssistant;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface PurchaseAssistantRepository extends CrudRepository<PurchaseAssistant, UUID> {


}



