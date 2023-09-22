package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.DosenService;
import com.model.Dosen;

@RestController
@CrossOrigin
public class DosenController {
	@Autowired
	DosenService dosenService;
	
	@GetMapping("/dosen")
	public List<Dosen> getAllDosen(){
		return dosenService.getAllDosen();
	}
}
