package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.repository.MataKuliahRepository;
import com.repository.RiwayatPengajaranRepository;

import java.util.List;

import com.model.MataKuliah;
import com.model.Penelitian;
import com.model.Pkm;
import com.model.RiwayatPengajaran;
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
		String nama_mata_kuliah = mataKuliahRequest.getNama_mata_kuliah();
	    
	    // Cari ID Penelitian berdasarkan judul
	    List<String> existingIds = mataKuliahRepository.findIdByMatkul(nama_mata_kuliah);
	    
	    if (existingIds.isEmpty()) {
	        // Penelitian dengan judul yang sama belum ada, tambahkan penelitian baru
	        MataKuliah newMatkul = mataKuliahRepository.save(mataKuliahRequest);
	        String newMatkulId = newMatkul.getId_mata_kuliah();
	        
	        // Tambahkan riwayat penelitian
	        RiwayatPengajaran RiwayatPengajaran = new RiwayatPengajaran();
	        RiwayatPengajaran.setId_mata_kuliah(newMatkulId);
	        RiwayatPengajaran.setId_dosen(id_dosen);
	        riwayatPengajaranRepository.save(RiwayatPengajaran);
	        
	        return newMatkulId;
	    } else {
	        // Gunakan ID penelitian yang sudah ada
	        String existingId = existingIds.get(0);
	        
	        // Tambahkan riwayat penelitian
	        RiwayatPengajaran RiwayatPengajaran = new RiwayatPengajaran();
	        RiwayatPengajaran.setId_mata_kuliah(existingId);
	        RiwayatPengajaran.setId_dosen(id_dosen);
	        riwayatPengajaranRepository.save(RiwayatPengajaran);
	        
	        return existingId;
		}
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
