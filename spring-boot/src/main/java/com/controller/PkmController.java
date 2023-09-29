package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.PkmService;
import com.model.Dosen;
import com.model.Pkm;

@RestController
@CrossOrigin
public class PkmController {
	@Autowired
	PkmService pkmService;
	
	@GetMapping("/pkm")
	public List<Pkm> getAllPkm(){
		return pkmService.getAllPkm();
	}
	
	@GetMapping("/pkm/{id_pengabdian}")
	public @ResponseBody Pkm getPkmById(@PathVariable("id_pengabdian") String id_pengabdian){
		return pkmService.getPkmById(id_pengabdian);
	}
	
	@PostMapping("/pkm/insert")
	public ResponseEntity<String> addPkm(@RequestBody Pkm pkmRequest){
		String judul_pengabdian = pkmRequest.getJudul_pengabdian();
		pkmService.addPkm(pkmRequest);
		return ResponseEntity.ok("PKM dengan judul " + judul_pengabdian + " berhasil ditambahkan");
	}
	@DeleteMapping("/pkm/delete")
	public ResponseEntity<String> deletePkm(@RequestParam String id_pengabdian){
		String judul_pengabdian = pkmService.getPkmById(id_pengabdian).getJudul_pengabdian();
		pkmService.deletePkm(id_pengabdian);
		return ResponseEntity.ok("Pengabdian dengan judul " + judul_pengabdian + " berhasil dihapus");
	}
	@PostMapping("/pkm/update")
	public ResponseEntity<String> updatePkm(@RequestBody Pkm pkmRequest){
		String judul_pengabdian = pkmService.getPkmById(pkmRequest.getId_pengabdian()).getJudul_pengabdian();
		pkmService.updatePkm(pkmRequest);
		return ResponseEntity.ok("Pengabdian dengan judul " + judul_pengabdian + " berhasil diupdate");
	}
	
	
}
