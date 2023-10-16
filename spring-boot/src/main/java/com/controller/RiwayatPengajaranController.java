package com.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.model.Dosen;
import com.service.RiwayatPengajaranService;

import java.util.List;

public class RiwayatPengajaranController {
    @Autowired
    private RiwayatPengajaranService riwayatPengajaranService;
    
    // @DeleteMapping("/matakuliah/riwayat/delete")
	// public ResponseEntity<String> deletePengajaran(@RequestParam String id_riwayat_pengajaran){
	// 	// String id_riwayatpengajaran = RiwayatPengajaranService.getPengajaranById(id_riwayat_pengajaran).getid_riwayat_pengajaran();
	// 	// RiwayatPengajaranService.deleteRiwayatPengajaran(id_riwayat_pengajaran);
	// 	// return ResponseEntity.ok("Penelitian dengan judul " + id_riwayatpengajaran + " berhasil dihapus");
	// }
}
