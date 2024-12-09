package com.bansikah.openAPIApp.dto;

import java.util.List;

public class ChatGPTResponse {

    private List<Choice> choices;


    public ChatGPTResponse(){

    }

    public ChatGPTResponse(List<Choice> choices) {
        this.choices = choices;
    }

    // Getters and Setters

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }

    @Override
    public String toString() {
        return "ChatGPTResponse{" +
                "choices=" + choices +
                '}';
    }
}
