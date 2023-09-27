package com.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Dosen;
import com.model.User;
import com.service.UserService;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;
    
    @GetMapping("/user")
    private List<User> getAllMahasiswa(){
        return userService.getAllUser();
    }

    @GetMapping("/user/{id_user}")
	public String getDosenById(@PathVariable("id_user") String id_user){
		return userService.getDosenId(id_user);
	}

    @PostMapping("/user/login")
	public User login(@RequestBody User userRequest){
		return userService.login(userRequest);
	}

}