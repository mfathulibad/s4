package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.RiwayatPendidikanRepository;
import java.util.List;
import com.model.RiwayatPendidikan;

@Service
public class RiwayatPendidikanService {
	@Autowired
	RiwayatPendidikanRepository riwayatPendidikanRepository;
	
	public List<RiwayatPendidikan> getAllRiwayatPendidikan(){
		return riwayatPendidikanRepository.findAll();
	}
	
	// public Dosen getDosenById(String id_dosen) {
	// 	return dosenRepository.getById(id_dosen);
	// }
	
	// public void addDosen(Dosen dosenRequest) {
	// 	dosenRepository.save(dosenRequest);
	// }
	
	// public void deleteDosen(String id_dosen) {
	// 	dosenRepository.deleteById(id_dosen);
	// }

}
