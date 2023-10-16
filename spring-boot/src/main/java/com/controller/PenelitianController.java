package com.controller;

import java.io.File;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;



import org.springframework.core.io.Resource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;

import org.springframework.http.MediaType;


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
	
	@GetMapping("/penelitian/{id_penelitian}")
	public @ResponseBody Penelitian getPenelitianById(@PathVariable("id_penelitian") String id_penelitian){
		return penelitianService.getPenelitianById(id_penelitian);
	}
		
	@GetMapping("/penelitian/dosen/{id_dosen}")
	public ResponseEntity<List<Penelitian>> getPenelitianByDosenId(@PathVariable("id_dosen") String id_dosen) {
	    List<Penelitian> penelitian = penelitianService.getPenelitianByDosenId(id_dosen);
	    if (penelitian != null) {
	        return ResponseEntity.ok(penelitian);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}	
	
	@PostMapping("/penelitian/insert/{id_dosen}")
	public String addPenelitian(@PathVariable("id_dosen") String id_dosen, @RequestBody Penelitian penelitianRequest){
		// String judul_penelitian = penelitianRequest.getJudul_penelitian();
		String newPenelitianId = penelitianService.addPenelitian(penelitianRequest, id_dosen);
		// return ResponseEntity.ok("Penelitian dengan judul " + judul_penelitian + " berhasil ditambahkan");
		return newPenelitianId;
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

	        // Simpan file PDF ke direktori tertentu
	        String fileName = id_penelitian + ".pdf"; // Nama file sesuai dengan ID penelitian
	        String uploadDir = "/Users/ASUS/Documents/TINGKAT 3/Pengembangan Web/Praktek/2. TUGASKEL/V2/s4/react-js/public/file_upload"; 
	        File uploadPath = new File(uploadDir);

	        if (!uploadPath.exists()) {
	            uploadPath.mkdirs(); // Buat direktori jika belum ada
	        }

	        try (InputStream inputStream = file.getInputStream()) {
	            File newFile = new File(uploadPath, fileName);
	            Files.copy(inputStream, newFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
	        }

	        // Simpan path file PDF ke entitas Penelitian
	        Penelitian penelitian = penelitianService.getPenelitianById(id_penelitian);
	        penelitian.setPath_pdf(fileName);
	        penelitianService.updatePenelitian(penelitian);

	        return ResponseEntity.ok("File PDF berhasil diunggah.");
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Gagal mengunggah file PDF: " + e.getMessage());
	    }
	}	
	
	@GetMapping("/penelitian/download-pdf/{id_penelitian}")
	public ResponseEntity<Resource> downloadPDF(@PathVariable String id_penelitian) {
	    // Dapatkan nama file PDF dari entitas Penelitian
	    Penelitian penelitian = penelitianService.getPenelitianById(id_penelitian);
	    String fileName = penelitian.getPath_pdf();

	    // Lokasi direktori tempat file PDF disimpan
	    String uploadDir = "/Users/ASUS/Documents/TINGKAT 3/Pengembangan Web/Praktek/2. TUGASKEL/V2/s4/react-js/public/file_upload";

	    try {
	        // Buat objek Resource untuk file PDF
	        Resource resource = new FileSystemResource(uploadDir + File.separator + fileName);

	        // Periksa apakah file ada
	        if (resource.exists()) {
	            HttpHeaders headers = new HttpHeaders();
	            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName);

	            // Set tipe konten sebagai aplikasi PDF
	            MediaType mediaType = MediaType.APPLICATION_PDF;
	            return ResponseEntity.ok()
	                    .headers(headers)
	                    .contentLength(resource.getFile().length())
	                    .contentType(mediaType)
	                    .body(resource);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
	    }
	}
	
	
	@GetMapping("/penelitian/search")
	public List<Penelitian> searchPenelitianByJudul(@RequestParam String judul) {
	    return penelitianService.searchPenelitianByJudul(judul);
	}
	
	//add penelitian untuk admin
	@PostMapping("/penelitian/admin/insert")
	public String addPenelitianByAdmin(@RequestBody Penelitian penelitianRequest){
		// String judul_penelitian = penelitianRequest.getJudul_penelitian();
		String newPenelitianId = penelitianService.addPenelitianByAdmin(penelitianRequest);
		// return ResponseEntity.ok("Penelitian dengan judul " + judul_penelitian + " berhasil ditambahkan");
		return newPenelitianId;
	}
	
}