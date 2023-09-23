package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.service.PkmService;
import com.model.Pkm;

@RestController
@CrossOrigin
public class PkmController {
	@Autowired
	PkmService pkmService;
	
	@GetMapping("/pkm")
	public List<Pkm> getAllPkm(){
		return pkmService.getAllPkm();
	}
}
