package com.group4.dblab_final.exception;

public class EntityNotFoundException extends RuntimeException{

    public EntityNotFoundException(Object id, String entityType, String idType){

        super("The "+entityType+" with "+idType+" : "+id+", does not exist in our database!!!");

    }


}
