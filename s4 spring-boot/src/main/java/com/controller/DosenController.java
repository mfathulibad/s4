package com.controller;

import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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

	@GetMapping("/dosen/{id_dosen}")
	public @ResponseBody Dosen getDosenById(@PathVariable("id_dosen") String id_dosen){
		return dosenService.getDosenById(id_dosen);
	}
	
	@PostMapping("/dosen/insert")
	public ResponseEntity<String> addDosen(@RequestBody Dosen dosenRequest){
		String nama_lengkap = dosenRequest.getNama_lengkap();
		dosenService.addDosen(dosenRequest);
		return ResponseEntity.ok("Dosen dengan nama " + nama_lengkap + " berhasil ditambahkan");
	}
	
	@DeleteMapping("/dosen/delete")
	public ResponseEntity<String> deleteDosen(@RequestParam String id_dosen){
		String nama_lengkap = dosenService.getDosenById(id_dosen).getNama_lengkap();
		dosenService.deleteDosen(id_dosen);
		return ResponseEntity.ok("Dosen dengan nama " + nama_lengkap + " berhasil dihapus");
	}
	
	@PostMapping("/dosen/update")
	public ResponseEntity<String> updateDosen(@RequestBody Dosen dosenRequest){
		String nama_lengkap = dosenService.getDosenById(dosenRequest.getId_dosen()).getNama_lengkap();
		dosenService.updateDosen(dosenRequest);
		return ResponseEntity.ok("Dosen dengan nama " + nama_lengkap + " berhasil diupdate");
	}
}
