package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.repository.PenelitianRepository;

import java.io.IOException;
import java.util.List;

import com.model.Penelitian;

@Service
public class PenelitianService {
	@Autowired
	PenelitianRepository penelitianRepository;
	
	public List<Penelitian> getAllPenelitian(){
		return penelitianRepository.findAll();
	}
	
	public Penelitian getPenelitianById(String id_penelitian) {
		return penelitianRepository.getById(id_penelitian);
	}
	
	public String addPenelitian (Penelitian penelitianRequest) {
		Penelitian saved = penelitianRepository.save(penelitianRequest);
		String newPenelitianId = saved.getId_penelitian();
		return newPenelitianId;
	}
	
	public void deletePenelitian(String id_penelitian) {
		penelitianRepository.deleteById(id_penelitian);
	}
	
	public void updatePenelitian(Penelitian penelitianRequest) {
		penelitianRepository.save(penelitianRequest);
	}
	
//	public void uploadPDF(String id_penelitian, MultipartFile file) throws IOException {
//        Penelitian penelitian = getPenelitianById(id_penelitian);
//
//        if (penelitian != null && !file.isEmpty()) {
//            // Validasi file PDF di sini jika perlu
//            if (!file.getContentType().equals("application/pdf")) {
//                throw new IllegalArgumentException("Hanya file PDF yang diizinkan.");
//            }
//
//            // Set data PDF ke entitas Penelitian
//            penelitian.setPdfFile(file.getBytes());
//
//            // Simpan perubahan ke database
//            penelitianRepository.save(penelitian);
//        } else {
//            throw new IllegalArgumentException("Penelitian tidak ditemukan atau file tidak diunggah.");
//        }
//	}
	
	
	
}