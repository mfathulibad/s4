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
	
	@PostMapping("/matakuliah/insert")
	public ResponseEntity<String> addMataKuliah(@RequestBody MataKuliah mataKuliahRequest){
		String nama_matkul = mataKuliahRequest.getNama_mata_kuliah();
		mataKuliahService.addMataKuliah(mataKuliahRequest);
		return ResponseEntity.ok("Mata Kuliah dengan nama " + nama_matkul + " berhasil ditambahkan");
	}
//	
	@DeleteMapping("/matakuliah/delete")
	public ResponseEntity<String> deleteMataKuliah(@RequestParam  String id_mata_kuliah){
		String nama_matkul = mataKuliahService.getMataKuliahbyId(id_mata_kuliah).getNama_mata_kuliah();
		mataKuliahService.deleteMataKuliah(id_mata_kuliah);
		return ResponseEntity.ok("Mata Kuliah dengan nama " + nama_matkul + " berhasil dihapus");
	}
	
	@PostMapping("/matakuliah/update")
	public ResponseEntity<String> updateMataKuliah(@RequestBody MataKuliah mataKuliahRequest){
		String nama_matkul = mataKuliahService.getMataKuliahbyId(mataKuliahRequest.getId_mata_kuliah()).getNama_mata_kuliah();
		mataKuliahService.updateMataKuliah(mataKuliahRequest);
		return ResponseEntity.ok("Mata Kuliah dengan nama " + nama_matkul + " berhasil diupdate");
	}
}
