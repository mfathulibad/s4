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
	public MataKuliah getMataKuliahbyId(String id_mata_kuliah) {
		return mataKuliahRepository.getById(id_mata_kuliah);
	}
	public void addMataKuliah(MataKuliah mataKuliahRequest) {
		mataKuliahRepository.save(mataKuliahRequest);
	}
	public void deleteMataKuliah(String id_mata_kuliah) {
		mataKuliahRepository.deleteById(id_mata_kuliah);
	}
	
	public void updateMataKuliah(MataKuliah mataKuliahRequest) {
		mataKuliahRepository.save(mataKuliahRequest);
	}
}
