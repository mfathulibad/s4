package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.DosenService;
import com.model.Dosen;

@RestController
@CrossOrigin
public class DosenController {
	@Autowired
	DosenService dosenService;
	
	@GetMapping("/dosen")
	public List<Dosen> getAllDosen(){
		return dosenService.getAllDosen();
	}
	
	@PostMapping("/dosen/insert")
	public ResponseEntity<String> addDosen(@RequestBody Dosen dosenRequest){
//		String id_dosen = dosenRequest.getId_dosen();
//		String id_user = dosenRequest.getId_user();
//		String email = dosenRequest.getEmail();
		String nama_lengkap = dosenRequest.getNama_lengkap();
//		String jabatan_fungsional = dosenRequest.getJabatan_fungsional();
//		String jurusan = dosenRequest.getJurusan();
		dosenService.addDosen(dosenRequest);
		return ResponseEntity.ok("Dosen dengan nama " + nama_lengkap + " berhasil ditambahkan");
	}
}
