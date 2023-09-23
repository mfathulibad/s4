package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.service.PenelitianService;
import com.model.Penelitian;

@RestController
@CrossOrigin
public class PenelitianController {
	@Autowired
	PenelitianService penelitianService;
	
	@GetMapping("/penelitian")
	public List<Penelitian> getAllPenelitian(){
		return penelitianService.getAllPenelitian();
	}
	
	@PostMapping("/penelitian/insert")
	public ResponseEntity<String> addPenelitian(@RequestBody Penelitian penelitianRequest){
		String judul_penelitian = penelitianRequest.getJudul_penelitian();
		penelitianService.addPenelitian(penelitianRequest);
		return ResponseEntity.ok("Penelitian dengan judul " + judul_penelitian + " berhasil ditambahkan");
	}
	
	@DeleteMapping("/penelitian/delete")
	public ResponseEntity<String> deletePenelitian(@RequestParam String id_penelitian){
		String judul_penelitian = penelitianService.getPenelitianById(id_penelitian).getJudul_penelitian();
		penelitianService.deletePenelitian(id_penelitian);
		return ResponseEntity.ok("Penelitian dengan judul " + judul_penelitian + " berhasil dihapus");
	}
	
	@PostMapping("/penelitian/update")
	public ResponseEntity<String> updatePenelitian(@RequestBody Penelitian penelitianRequest){
		String judul_penelitian = penelitianService.getPenelitianById(penelitianRequest.getId_penelitian()).getJudul_penelitian();
		penelitianService.updatePenelitian(penelitianRequest);
		return ResponseEntity.ok("Penelitian dengan judul " + judul_penelitian+ " berhasil diupdate");
	}
}
