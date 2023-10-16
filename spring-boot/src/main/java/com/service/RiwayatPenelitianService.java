package com.service;

import com.model.RiwayatPenelitian;
import com.model.Dosen;
import com.model.Penelitian;
import com.repository.RiwayatPenelitianRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RiwayatPenelitianService {

    @Autowired
    private RiwayatPenelitianRepository riwayatPenelitianRepository;

    public List<Dosen> findDosenIdsByPenelitianId(String idPenelitian) {
        return riwayatPenelitianRepository.findDosenIdsByPenelitianId(idPenelitian);
    }
    
    public void deleteRiwayatPenelitian(String id_penelitian) {
    	riwayatPenelitianRepository.deleteById(id_penelitian);
	}
    
    public RiwayatPenelitian getPenelitianById(String id_penelitian) {
		return riwayatPenelitianRepository.getById(id_penelitian);
	}
    
    public String getIdRiwayatPenelitianByDosenAndPenelitian(String idDosen, String idPenelitian) {
        return riwayatPenelitianRepository.findIdRiwayatPenelitianByDosenAndPenelitian(idDosen, idPenelitian);
    }
    
}
