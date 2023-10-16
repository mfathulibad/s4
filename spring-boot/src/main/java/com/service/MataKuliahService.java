package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.repository.MataKuliahRepository;
import com.repository.RiwayatPengajaranRepository;

import java.util.List;

import com.model.MataKuliah;
import com.model.RiwayatPengajaran;

@Service
public class MataKuliahService {
	@Autowired
	MataKuliahRepository mataKuliahRepository;

	@Autowired
    private RiwayatPengajaranRepository riwayatPengajaranRepository;
	
	public List<MataKuliah> getAllMataKuliah(){
		return mataKuliahRepository.findAll();
	}	
	public MataKuliah getMataKuliahbyId(String id_mata_kuliah) {
		return mataKuliahRepository.getById(id_mata_kuliah);
	}

	public List<MataKuliah> getMataKuliahbyDosenId(String idDosen) {
    return mataKuliahRepository.getMataKuliahbyDosenId(idDosen);
	}

	public String addMataKuliah(MataKuliah mataKuliahRequest, String id_dosen) {
		MataKuliah newMataKuliah = mataKuliahRepository.save(mataKuliahRequest);

         // Mengambil ID Penelitian yang baru saja ditambahkan
         String newMataKuliahId = newMataKuliah.getId_mata_kuliah();

         // Membuat objek RiwayatPenelitian
         RiwayatPengajaran riwayatPengajaran = new RiwayatPengajaran();
         riwayatPengajaran.setId_mata_kuliah(newMataKuliahId);
         riwayatPengajaran.setId_dosen(id_dosen);

         // Melakukan operasi penyisipan data ke dalam tabel 'riwayat_penelitian'
         riwayatPengajaranRepository.save(riwayatPengajaran);

         // Mengembalikan ID penelitian yang baru ditambahkan
         return newMataKuliahId;

		//System.out.println(mataKuliahRequest.getId_mata_kuliah());
		//mataKuliahRepository.save(mataKuliahRequest);
	}

	public void deleteMataKuliah(String id_mata_kuliah) {
		mataKuliahRepository.deleteById(id_mata_kuliah);
	}
	
	public void updateMataKuliah(MataKuliah mataKuliahRequest) {
		mataKuliahRepository.save(mataKuliahRequest);
	}
}
