package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.service.RiwayatPendidikanService;
import com.model.RiwayatPendidikan;

@RestController
@CrossOrigin
public class RiwayatPendidikanController {
	@Autowired
	RiwayatPendidikanService riwayatPendidikanService;
	
	@GetMapping("/riwayatpendidikan")
	public List<RiwayatPendidikan> getAllRiwayatPendidikan(){
		return riwayatPendidikanService.getAllRiwayatPendidikan();
	}

	@GetMapping("/riwayatpendidikan/{id_dosen}")
	public @ResponseBody RiwayatPendidikan getRiwayatPendidikanById(@PathVariable("id_dosen") String id_dosen){
		return riwayatPendidikanService.getRiwayatPendidikanById(id_dosen);

	}

	@GetMapping("/riwayatpendidikan/dosen/{id_dosen}")
	public ResponseEntity<List<RiwayatPendidikan>> getRiwayatPendidikanByDosenId(@PathVariable("id_dosen") String id_dosen) {
	    List<RiwayatPendidikan> riwayatPendidikan = riwayatPendidikanService.getRiwayatPendidikanByDosenId(id_dosen);
	    if (riwayatPendidikan != null) {
	        return ResponseEntity.ok(riwayatPendidikan);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	@PostMapping("/riwayatpendidikan/insert")
	public ResponseEntity<String> addRiwayatPendidikan(@RequestBody RiwayatPendidikan riwayatPendidikanRequest){
		String nama_institute = riwayatPendidikanRequest.getInstitusi();
		riwayatPendidikanService.addRiwayatPendidikan(riwayatPendidikanRequest);
		return ResponseEntity.ok("Institute dengan nama " + nama_institute + " berhasil ditambahkan");
	}
	
	@DeleteMapping("/riwayatpendidikan/delete")
	public ResponseEntity<String> deleteRiwayatPendidikan(@RequestParam String id_riwayat_pendidikan){
		String nama_institute = riwayatPendidikanService.getRiwayatPendidikanById(id_riwayat_pendidikan).getInstitusi();
		riwayatPendidikanService.deleteRiwayatPendidikan(id_riwayat_pendidikan);
		return ResponseEntity.ok("Institute dengan nama " + nama_institute + " berhasil dihapus");
	}

	@PostMapping("/riwayatpendidikan/update")
	public ResponseEntity<String> updateRiwayatPendidikan(@RequestBody RiwayatPendidikan riwayatPendidikanRequest){
		String nama_institute = riwayatPendidikanService.getRiwayatPendidikanById(riwayatPendidikanRequest.getId_riwayat_pendidikan()).getInstitusi();
		riwayatPendidikanService.updateRiwayatPendidikan(riwayatPendidikanRequest);
		return ResponseEntity.ok("Institute dengan nama " + nama_institute + " berhasil diupdate");
	}
}