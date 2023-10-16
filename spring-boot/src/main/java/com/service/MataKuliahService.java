package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.repository.MataKuliahRepository;
import com.repository.RiwayatPengajaranRepository;

import java.util.List;

import com.model.MataKuliah;
import com.model.Penelitian;
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

	// public String addMataKuliah(MataKuliah mataKuliahRequest, String id_dosen) {
	// 	// Buat ID mata kuliah yang unik berdasarkan kombinasi "namaMataKuliah" dan "semester"
	// 	mataKuliahRequest.generateId();
	
	// 	// Periksa apakah mata kuliah dengan ID yang sama sudah ada dalam database
	// 	if (mataKuliahRepository.findById(mataKuliahRequest.getId_mata_kuliah()).isPresent()) {
	// 		// ID sudah ada, mungkin hendak menggantinya atau menolak simpanan
	// 	}
	
	// 	// Simpan data mata kuliah yang telah dibuat dan ID yang telah dihasilkan
	// 	MataKuliah newMataKuliah = mataKuliahRepository.save(mataKuliahRequest);
	
	// 	// Mengambil ID Mata Kuliah yang baru saja ditambahkan
	// 	String newMataKuliahId = newMataKuliah.getId_mata_kuliah();
	
	// 	// Membuat objek RiwayatPenelitian
	// 	RiwayatPengajaran riwayatPengajaran = new RiwayatPengajaran();
	// 	riwayatPengajaran.setId_mata_kuliah(newMataKuliahId);
	// 	riwayatPengajaran.setId_dosen(id_dosen);
	
	// 	// Melakukan operasi penyisipan data ke dalam tabel 'riwayat_penelitian'
	// 	riwayatPengajaranRepository.save(riwayatPengajaran);
	
	// 	// Mengembalikan ID mata kuliah yang baru ditambahkan
	// 	return newMataKuliahId;
	// }
	

	public void deleteMataKuliah(String id_mata_kuliah) {
		mataKuliahRepository.deleteById(id_mata_kuliah);
	}
	
	public void updateMataKuliah(MataKuliah mataKuliahRequest) {
		mataKuliahRepository.save(mataKuliahRequest);
	}

	public List<MataKuliah> searchMataKuliahByMatkul(String matkul) {
	    return mataKuliahRepository.searchByMatkul(matkul);
	}

	public String addMataKuliahByAdmin (MataKuliah mataKuliahRequest) {
		MataKuliah saved = mataKuliahRepository.save(mataKuliahRequest);
		String newMataKuliahId = saved.getId_mata_kuliah();
		return newMataKuliahId;
	}

}
