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

import com.service.PenelitianService;
import com.model.Penelitian;

@RestController
@CrossOrigin
public class PenelitianController {
	@Autowired
	PenelitianService penelitianService;
	
	@GetMapping("/penelitian")
	public List<Penelitian> getAllPenelitian(){
		return penelitianService.getAllPenelitian();
	}
}
