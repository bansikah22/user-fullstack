package com.bansikah.openAPIApp.dto;

import java.util.Objects;

public class Choice {
    private String text;
    private int index;

    public Choice(){

    }

    public Choice(String text, int index) {
        this.text = text;
        this.index = index;
    }

    // Getters and Setters

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    @Override
    public String toString() {
        return "Choice{" +
                "text='" + text + '\'' +
                ", index=" + index +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Choice choice = (Choice) o;
        return index == choice.index && Objects.equals(text, choice.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(text, index);
    }
}
