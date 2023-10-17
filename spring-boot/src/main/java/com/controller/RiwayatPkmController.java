package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.model.Dosen;
import com.model.Pkm;
import com.service.RiwayatPkmService;

import java.util.List;

@RestController
@CrossOrigin
public class RiwayatPkmController {

    @Autowired
    private RiwayatPkmService riwayatPkmService;
    
    @GetMapping("/riwayat_pkm/teams/{idPengabdian}")
    public ResponseEntity<List<Dosen>> findDosenIdsByPkmId(@PathVariable("idPengabdian") String idPengabdian) {
        List<Dosen> dosenIds = riwayatPkmService.findDosenIdsByPkmId(idPengabdian);
        if (dosenIds != null && !dosenIds.isEmpty()) {
            return ResponseEntity.ok(dosenIds);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/pkm/riwayat/delete")
	public ResponseEntity<String> deletePengabdian(@RequestParam String id_riwayat_pkm){
		String id_riwayatpkm= riwayatPkmService.getPkmById(id_riwayat_pkm).getId_riwayat_pkm();
		riwayatPkmService.deleteRiwayatPkm(id_riwayat_pkm);
		return ResponseEntity.ok("Pkm dengan judul " + id_riwayatpkm + " berhasil dihapus");
	}
    
    @GetMapping("/riwayat_pkm/{idDosen}/{idPengabdian}")
    public ResponseEntity<String> getIdRiwayatPkmByDosenAndPkm(
            @PathVariable("idDosen") String idDosen,
            @PathVariable("idPengabdian") String idPengabdian) {
        String idRiwayatPkm = riwayatPkmService.getIdRiwayatPkmByDosenAndPkm(idDosen, idPengabdian);
        if (idRiwayatPkm!= null) {
            return ResponseEntity.ok(idRiwayatPkm);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
