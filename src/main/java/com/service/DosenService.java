package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.DosenRepository;
import java.util.List;

import com.model.Dosen;

@Service
public class DosenService {
	@Autowired
	DosenRepository dosenRepository;
	
	public List<Dosen> getAllDosen(){
		return dosenRepository.findAll();
	}
	
	public Dosen getDosenById(String id_dosen) {
		return dosenRepository.getById(id_dosen);
	}
	
	public void addDosen(Dosen dosenRequest) {
		dosenRepository.save(dosenRequest);
	}
	
	public void deleteDosen(String id_dosen) {
		dosenRepository.deleteById(id_dosen);
	}

}
