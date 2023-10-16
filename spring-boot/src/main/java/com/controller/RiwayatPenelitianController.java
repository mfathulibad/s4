package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.model.Dosen;

import com.service.RiwayatPenelitianService;

import java.util.List;

@RestController
@CrossOrigin
public class RiwayatPenelitianController {

    @Autowired
    private RiwayatPenelitianService riwayatPenelitianService;

    @GetMapping("/riwayat_penelitian/authors/{idPenelitian}")
    public ResponseEntity<List<Dosen>> findDosenIdsByPenelitianId(@PathVariable("idPenelitian") String idPenelitian) {
        List<Dosen> dosenIds = riwayatPenelitianService.findDosenIdsByPenelitianId(idPenelitian);
        if (dosenIds != null && !dosenIds.isEmpty()) {
            return ResponseEntity.ok(dosenIds);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/penelitian/riwayat/delete")
	public ResponseEntity<String> deletePenelitian(@RequestParam String id_riwayat_penelitian){
		String id_riwayatpenelitian = riwayatPenelitianService.getPenelitianById(id_riwayat_penelitian).getId_riwayat_penelitian();
		riwayatPenelitianService.deleteRiwayatPenelitian(id_riwayat_penelitian);
		return ResponseEntity.ok("Penelitian dengan judul " + id_riwayatpenelitian + " berhasil dihapus");
	}
    
}
