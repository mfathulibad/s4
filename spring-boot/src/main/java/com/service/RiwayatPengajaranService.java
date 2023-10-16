package com.service;

import com.model.RiwayatPengajaran;
import com.model.Dosen;
import com.model.RiwayatPenelitian;
import com.repository.RiwayatPengajaranRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RiwayatPengajaranService {
    @Autowired
    private RiwayatPengajaranRepository riwayatPengajaranRepository;

    public List<Dosen> findDosenIdsByPengajaranId(String idMatakuliah) {
        return riwayatPengajaranRepository.findDosenIdsByPengajaranId(idMatakuliah);
    }
    
    public void deleteRiwayatPenelitian(String id_mata_kuliah) {
    	riwayatPengajaranRepository.deleteById(id_mata_kuliah);
	}
    
    public RiwayatPengajaran getPengajaranById(String id_mata_kuliah) {
		return riwayatPengajaranRepository.getById(id_mata_kuliah);
	}

    public String getIdRiwayatPengajaranByDosenAndMatakuliah(String idDosen, String idMatakuliah) {
        return riwayatPengajaranRepository.findIdRiwayatPengajaranByDosenAndMatakuliah(idDosen, idMatakuliah);
    }
}
