package com.group4.dblab_final.repository;

import com.group4.dblab_final.entity.SalesAssistant;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface SalesAssistantRepository extends CrudRepository<SalesAssistant, UUID> {
}
