package com.service;

import com.model.RiwayatPkm;
import com.model.Dosen;
import com.repository.RiwayatPkmRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RiwayatPkmService {

    @Autowired
    private RiwayatPkmRepository riwayatPkmRepository;

    public List<Dosen> findDosenIdsByPkmId(String idPengabdian) {
        return riwayatPkmRepository.findDosenIdsByPkmId(idPengabdian);
    }
    
    public void deleteRiwayatPkm(String id_pengabdian) {
    	riwayatPkmRepository.deleteById(id_pengabdian);
	}
    
    public RiwayatPkm getPkmById(String id_pengabdian) {
		return riwayatPkmRepository.getById(id_pengabdian);
	}
    
    public String getIdRiwayatPkmByDosenAndPkm(String idDosen, String idPengabdian) {
        return riwayatPkmRepository.findIdRiwayatPkmByDosenAndPkm(idDosen, idPengabdian);
    }
    
}
