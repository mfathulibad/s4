package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.PkmRepository;
import com.repository.RiwayatPkmRepository;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.time.LocalDate;

import com.model.Dosen;
import com.model.Pkm;
import com.model.RiwayatPkm;

@Service
public class PkmService {
	@Autowired
	PkmRepository pkmRepository;
	@Autowired
    private RiwayatPkmRepository riwayatPkmRepository;
	
	public List<Pkm> getAllPkm(){
		return pkmRepository.findAll();
	}
	
	public Pkm getPkmById(String id_pengabdian) {
		return pkmRepository.getById(id_pengabdian);
	}
	
	
	public List<Pkm> getPkmByDosenId(String idDosen) {
	    return pkmRepository.getPkmByDosenId(idDosen);
	}
	
	public String addPkm(Pkm pkmRequest, String id_dosen) {
	    String judul_pengabdian = pkmRequest.getJudul_pengabdian();
	    
	    // Cari ID Penelitian berdasarkan judul
	    List<String> existingIds = pkmRepository.findIdByJudulPengabdian(judul_pengabdian);
	    
	    if (existingIds.isEmpty()) {
	        // Penelitian dengan judul yang sama belum ada, tambahkan penelitian baru
	        Pkm newPkm = pkmRepository.save(pkmRequest);
	        String newPkmId = newPkm.getId_pengabdian();
	        
	        // Tambahkan riwayat penelitian
	        RiwayatPkm riwayatPkm = new RiwayatPkm();
	        riwayatPkm.setId_pengabdian(newPkmId);
	        riwayatPkm.setId_dosen(id_dosen);
	        riwayatPkmRepository.save(riwayatPkm);
	        
	        return newPkmId;
	    } else {
	        // Gunakan ID penelitian yang sudah ada
	        String existingId = existingIds.get(0);
	        
	        // Tambahkan riwayat penelitian
	        RiwayatPkm riwayatPkm = new RiwayatPkm();
	        riwayatPkm.setId_pengabdian(existingId);
	        riwayatPkm.setId_dosen(id_dosen);
	        riwayatPkmRepository.save(riwayatPkm);
	        
	        return existingId;
	    }
	}
	
	public List<String> getDaftarJudulPengabdian() {
        List<Pkm> pkmList = pkmRepository.findAll(); // Assuming you have a repository for Pkm
        List<String> daftarJudul = pkmList.stream()
                .map(Pkm::getJudul_pengabdian) // Assuming getJudul_pengabdian returns the title
                .collect(Collectors.toList());
        return daftarJudul;
    }
	public List<Pkm> searchPkmByJudul(String judul) {
	    return pkmRepository.searchByJudulPengabdian(judul);
	}
	
	public void deletePkm(String id_pengabdian) {
		pkmRepository.deleteById(id_pengabdian);
	}
	public void updatePkm(Pkm pkmRequest) {
		pkmRepository.save(pkmRequest);
	}

}
