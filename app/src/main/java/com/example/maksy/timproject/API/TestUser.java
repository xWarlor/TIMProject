package com.example.maksy.timproject.API;

import com.google.gson.annotations.SerializedName;

public class TestUser {

    @SerializedName("id")
    private int id;
    @SerializedName("name")
    private String name;
    @SerializedName("surname")
    private String surname;

    public TestUser(){}

    public TestUser(int id, String name, String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
