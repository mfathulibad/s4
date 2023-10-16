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


import com.service.MataKuliahService;
import com.model.MataKuliah;
import com.model.Penelitian;
import com.model.Pkm;

@RestController
@CrossOrigin
public class MataKuliahController {
	@Autowired
	MataKuliahService mataKuliahService;
	
	@GetMapping("/matakuliah")
	public List<MataKuliah> getAllMataKuliah(){
		return mataKuliahService.getAllMataKuliah();
	}

	@GetMapping("/matakuliah/{id_mata_kuliah}")
	public @ResponseBody MataKuliah getMataKuliahbyId(@PathVariable("id_mata_kuliah") String id_mata_kuliah){
		return mataKuliahService.getMataKuliahbyId(id_mata_kuliah); //

	}

	@GetMapping("/matakuliah/dosen/{id_dosen}")
	public ResponseEntity<List<MataKuliah>> getMataKuliahbyDosenId(@PathVariable("id_dosen") String id_dosen) {
	    List<MataKuliah> matakuliah = mataKuliahService.getMataKuliahbyDosenId(id_dosen);
	    if (matakuliah != null) {
	        return ResponseEntity.ok(matakuliah);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	@PostMapping("/matakuliah/insert/{id_dosen}")
	public String addMataKuliah(@PathVariable("id_dosen") String id_dosen, @RequestBody MataKuliah mataKuliahRequest) {
    	// String judul_penelitian = penelitianRequest.getJudul_penelitian();
		String newMatakuliahId = mataKuliahService.addMataKuliah(mataKuliahRequest, id_dosen);

		// return ResponseEntity.ok("Penelitian dengan judul " + judul_penelitian + " berhasil ditambahkan");
		return newMatakuliahId;
	}
	
	@DeleteMapping("/matakuliah/delete")
	public ResponseEntity<String> deleteMataKuliah(@RequestParam  String id_mata_kuliah){
		String nama_mata_kuliah = mataKuliahService.getMataKuliahbyId(id_mata_kuliah).getNama_mata_kuliah();
		mataKuliahService.deleteMataKuliah(id_mata_kuliah);
		return ResponseEntity.ok("Mata Kuliah dengan nama " + nama_mata_kuliah + " berhasil dihapus");
	}
	
	@PostMapping("/matakuliah/update")
	public ResponseEntity<String> updateMataKuliah(@RequestBody MataKuliah mataKuliahRequest){
		String nama_mata_kuliah = mataKuliahService.getMataKuliahbyId(mataKuliahRequest.getId_mata_kuliah()).getNama_mata_kuliah();
		mataKuliahService.updateMataKuliah(mataKuliahRequest);
		return ResponseEntity.ok("Mata Kuliah dengan nama " + nama_mata_kuliah + " berhasil diupdate");
	}
}
