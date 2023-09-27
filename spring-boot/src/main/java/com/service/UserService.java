package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.model.User;
import com.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	//Get all user
    public List<User> getAllUser(){
        return userRepository.findAll();
    }
    
    public String getDosenId(String id_user){
        return userRepository.getDosenId(id_user);
    }

    public User login(User userRequest){
        String username = userRequest.getUsername();
        String password = userRequest.getPassword();
        return userRepository.login(username, password);
    }
	
}
