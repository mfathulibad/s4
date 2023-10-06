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
	
//	public List<Object[]> getPenelitianByDosenId(String id_dosen) {
//        return penelitianRepository.findByDosenId(id_dosen);
//    }
	
//	public Penelitian getPenelitianByDosenId(String idDosen) {
//	    return penelitianRepository.getPenelitianByDosenId(idDosen);
//	}
	
	
	public List<Penelitian> getPenelitianByDosenId(String idDosen) {
	    return penelitianRepository.getPenelitianByDosenId(idDosen);
	}
	
	
	public String addPenelitian (Penelitian penelitianRequest, String id_dosen) {
//		String judul_penelitian= penelitianRequest.getJudul_penelitian();
//		String bidang_penelitian = penelitianRequest.getBidang_penelitian();
//		LocalDate tgl_penelitian = penelitianRequest.getTgl_penelitian();
//		String url = penelitianRequest.getUrl();
//		
//		return penelitianRepository.addPenelitian(
//				judul_penelitian,
//				bidang_penelitian,
//				tgl_penelitian,
//				url,
//				id_dosen
//			);
		
	            
         Penelitian newPenelitian = penelitianRepository.save(penelitianRequest);

         // Mengambil ID Penelitian yang baru saja ditambahkan
         String newPenelitianId = newPenelitian.getId_penelitian();

         // Membuat objek RiwayatPenelitian
         RiwayatPenelitian riwayatPenelitian = new RiwayatPenelitian();
         riwayatPenelitian.setId_penelitian(newPenelitianId);
         riwayatPenelitian.setId_dosen(id_dosen);

         // Melakukan operasi penyisipan data ke dalam tabel 'riwayat_penelitian'
         riwayatPenelitianRepository.save(riwayatPenelitian);

         // Mengembalikan ID penelitian yang baru ditambahkan
         return newPenelitianId;
	}
	
	public void deletePenelitian(String id_penelitian) {
		penelitianRepository.deleteById(id_penelitian);
	}
	
	public void updatePenelitian(Penelitian penelitianRequest) {
		penelitianRepository.save(penelitianRequest);
	}
	
		
	
}