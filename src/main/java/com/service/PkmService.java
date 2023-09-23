package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.PkmRepository;
import java.util.List;

import com.model.Dosen;
import com.model.Pkm;

@Service
public class PkmService {
	@Autowired
	PkmRepository pkmRepository;
	
	public List<Pkm> getAllPkm(){
		return pkmRepository.findAll();
	}
	
	public Pkm getPkmById(String id_pengabdian) {
		return pkmRepository.getById(id_pengabdian);
	}
	
	public void addPkm(Pkm pkmRequest) {
		pkmRepository.save(pkmRequest);
	}
	
	public void deletePkm(String id_pengabdian) {
		pkmRepository.deleteById(id_pengabdian);
	}
	public void updatePkm(Pkm pkmRequest) {
		pkmRepository.save(pkmRequest);
	}

}
