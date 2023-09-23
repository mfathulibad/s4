package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.MataKuliahRepository;
import java.util.List;

import com.model.MataKuliah;

@Service
public class MataKuliahService {
	@Autowired
	MataKuliahRepository mataKuliahRepository;
	
	public List<MataKuliah> getAllMataKuliah(){
		return mataKuliahRepository.findAll();
	}	
}
