package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.RiwayatPendidikanRepository;
import java.util.List;

import com.model.Dosen;
import com.model.RiwayatPendidikan;

@Service
public class RiwayatPendidikanService {
	@Autowired
	RiwayatPendidikanRepository riwayatPendidikanRepository;
	
	public List<RiwayatPendidikan> getAllRiwayatPendidikan(){
		return riwayatPendidikanRepository.findAll();
	}
	
	public RiwayatPendidikan getRiwayatPendidikanById(String id_riwayat_pendidikan) {
		return riwayatPendidikanRepository.getById(id_riwayat_pendidikan);
	}
	
	public void addRiwayatPendidikan(RiwayatPendidikan riwayatPendidikanRequest) {
		riwayatPendidikanRepository.save(riwayatPendidikanRequest);
	}
	
	public void deleteRiwayatPendidikan(String id_riwayat_pendidikan) {
		riwayatPendidikanRepository.deleteById(id_riwayat_pendidikan);
	}

	public void updateRiwayatPendidikan(RiwayatPendidikan riwayatPendidikanRequest) {
		riwayatPendidikanRepository.save(riwayatPendidikanRequest);
	}

}
