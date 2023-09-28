package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import org.springframework.web.multipart.MultipartFile;

import com.service.PenelitianService;
import com.model.Dosen;
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
	
	@GetMapping("/penelitian/{id_penelitian}")
	public @ResponseBody Penelitian getPenelitianById(@PathVariable("id_penelitian") String id_penelitian){
		return penelitianService.getPenelitianById(id_penelitian);
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
	
	
	@PostMapping("/penelitian/upload-pdf/{id_penelitian}")
    public ResponseEntity<String> uploadPDF(
        @PathVariable String id_penelitian,
        @RequestParam("file") MultipartFile file
    ) {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Pilih file PDF untuk diunggah.");
        }

        try {
            // Validasi file PDF di sini jika perlu
        	if (!file.getContentType().equals("application/pdf")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Hanya file PDF yang diizinkan.");
            }

            penelitianService.uploadPDF(id_penelitian, file);
            return ResponseEntity.ok("File PDF berhasil diunggah.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Gagal mengunggah file PDF: " + e.getMessage());
        }
    }
	
	
	
	
	
}
