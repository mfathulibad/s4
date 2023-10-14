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
	
	@GetMapping("/pkm/judulPengabdian")
	public List<String> getDaftarJudulPengabdian() {
	    List<String> daftarJudulPengabdian = pkmService.getDaftarJudulPengabdian();
	    return daftarJudulPengabdian;
	}
	
	@GetMapping("/penelitian/search")
	public List<Pkm> searchPkmByJudul(@RequestParam String judul) {
	    return pkmService.searchPkmByJudul(judul);
	}
	
	@GetMapping("/pkm/dosen/{id_dosen}")
	public ResponseEntity<List<Pkm>> getPkmByDosenId(@PathVariable("id_dosen") String id_dosen) {
	    List<Pkm> pkm = pkmService.getPkmByDosenId(id_dosen);
	    if (pkm != null) {
	        return ResponseEntity.ok(pkm);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	
	@PostMapping("/pkm/insert/{id_dosen}")
	public String addPkm(@PathVariable("id_dosen") String id_dosen, @RequestBody Pkm pkmRequest){
		// String judul_penelitian = penelitianRequest.getJudul_penelitian();
		String newPkmId = pkmService.addPkm(pkmRequest, id_dosen);
		// return ResponseEntity.ok("Penelitian dengan judul " + judul_penelitian + " berhasil ditambahkan");
		return newPkmId;
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
