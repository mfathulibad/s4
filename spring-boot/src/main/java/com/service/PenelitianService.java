package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.repository.PenelitianRepository;
import com.repository.RiwayatPenelitianRepository;

import java.time.LocalDate;
import java.util.List;

import com.model.Dosen;
import com.model.Penelitian;
import com.model.RiwayatPenelitian;

@Service
public class PenelitianService {
	@Autowired
	PenelitianRepository penelitianRepository;
	
	@Autowired
    private RiwayatPenelitianRepository riwayatPenelitianRepository;
	
	public List<Penelitian> getAllPenelitian(){
		return penelitianRepository.findAll();
	}
	
	public Penelitian getPenelitianById(String id_penelitian) {
		return penelitianRepository.getById(id_penelitian);
	}
	
	public List<Penelitian> getPenelitianByDosenId(String idDosen) {
	    return penelitianRepository.getPenelitianByDosenId(idDosen);
	}
	
	public String addPenelitian(Penelitian penelitianRequest, String id_dosen) {
	    String judulPenelitian = penelitianRequest.getJudul_penelitian();
	    
	    // Cari ID Penelitian berdasarkan judul
	    List<String> existingIds = penelitianRepository.findIdByJudulPenelitian(judulPenelitian);
	    
	    if (existingIds.isEmpty()) {
	        // Penelitian dengan judul yang sama belum ada, tambahkan penelitian baru
	        Penelitian newPenelitian = penelitianRepository.save(penelitianRequest);
	        String newPenelitianId = newPenelitian.getId_penelitian();
	        
	        // Tambahkan riwayat penelitian
	        RiwayatPenelitian riwayatPenelitian = new RiwayatPenelitian();
	        riwayatPenelitian.setId_penelitian(newPenelitianId);
	        riwayatPenelitian.setId_dosen(id_dosen);
	        riwayatPenelitianRepository.save(riwayatPenelitian);
	        
	        return newPenelitianId;
	    } else {
	        // Gunakan ID penelitian yang sudah ada
	        String existingId = existingIds.get(0);
	        
	        // Tambahkan riwayat penelitian
	        RiwayatPenelitian riwayatPenelitian = new RiwayatPenelitian();
	        riwayatPenelitian.setId_penelitian(existingId);
	        riwayatPenelitian.setId_dosen(id_dosen);
	        riwayatPenelitianRepository.save(riwayatPenelitian);
	        
	        return existingId;
	    }
	}
 
	
	public void deletePenelitian(String id_penelitian) {
		penelitianRepository.deleteById(id_penelitian);
	}
	
	public void updatePenelitian(Penelitian penelitianRequest) {
		penelitianRepository.save(penelitianRequest);
	}
	
	public List<Penelitian> searchPenelitianByJudul(String judul) {
	    return penelitianRepository.searchByJudulPenelitian(judul);
	}

		
	
}