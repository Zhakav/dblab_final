package com.group4.dblab_final.Enumeration;

public enum StaffType {
    PURCHASE_ASSISTANT("Purchase Assistant"),
    SALES_ASSISTANT("Sales Assistant");
    String value;

    StaffType(String value){
        this.value=value;
    }

    @Override
    public String toString() {
        return value;
    }
}
