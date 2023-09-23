package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.PenelitianRepository;
import java.util.List;

import com.model.Penelitian;

@Service
public class PenelitianService {
	@Autowired
	PenelitianRepository penelitianRepository;
	
	public List<Penelitian> getAllPenelitian(){
		return penelitianRepository.findAll();
	}
	
}

