package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.PkmRepository;
import com.repository.RiwayatPkmRepository;

import java.util.List;
import java.util.Random;

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
//		String judul_pengabdian = pkmRequest.getJudul_pengabdian();
//		String bidang_pengabdian = pkmRequest.getBidang_pengabdian();
//		LocalDate tgl_pengabdian = pkmRequest.getTgl_pengabdian();
//		String url = pkmRequest.getUrl();
//
//		return pkmRepository.addPkm(
//			judul_pengabdian,
//			bidang_pengabdian,
//			tgl_pengabdian,
//			url,
//			id_dosen
//		);
		
		Pkm newPkm = pkmRepository.save(pkmRequest);

        // Mengambil ID Penelitian yang baru saja ditambahkan
        String newPkmId = newPkm.getId_pengabdian();

        // Membuat objek RiwayatPenelitian
        RiwayatPkm riwayatPkm = new RiwayatPkm();
        riwayatPkm.setId_pengabdian(newPkmId);
        riwayatPkm.setId_dosen(id_dosen);

        // Melakukan operasi penyisipan data ke dalam tabel 'riwayat_penelitian'
        riwayatPkmRepository.save(riwayatPkm);

        // Mengembalikan ID penelitian yang baru ditambahkan
        return newPkmId;
	}
	
	public void deletePkm(String id_pengabdian) {
		pkmRepository.deleteById(id_pengabdian);
	}
	public void updatePkm(Pkm pkmRequest) {
		pkmRepository.save(pkmRequest);
	}

}
