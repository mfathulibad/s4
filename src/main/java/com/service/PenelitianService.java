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
	
	public Penelitian getPenelitianById(String id_penelitian) {
		return penelitianRepository.getById(id_penelitian);
	}
	
	public void addPenelitian (Penelitian penelitianRequest) {
		penelitianRepository.save(penelitianRequest);
	}
	
	public void deletePenelitian(String id_penelitian) {
		penelitianRepository.deleteById(id_penelitian);
	}
	
	public void updatePenelitian(Penelitian penelitianRequest) {
		penelitianRepository.save(penelitianRequest);
	}
	
}

