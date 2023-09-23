package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.MataKuliahService;
import com.model.MataKuliah;

@RestController
@CrossOrigin
public class MataKuliahController {
	@Autowired
	MataKuliahService mataKuliahService;
	
	@GetMapping("/MataKuliah")
	
	public List<MataKuliah> getAllMataKuliah(){
		return mataKuliahService.getAllMataKuliah();
	}
}
