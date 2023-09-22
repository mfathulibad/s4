package com.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Mahasiswa;
import com.service.MahasiswaService;

@RestController
@CrossOrigin
public class MahasiswaController {
    @Autowired
    MahasiswaService mahasiswaService;
    
    @GetMapping("/mahasiswa")
    private List<Mahasiswa> getAllMahasiswa(){
        return mahasiswaService.getAllMahasiswa();
    }

    @PostMapping("/add")
    public Mahasiswa addMahasiswa(@RequestBody Mahasiswa mahasiswa) {
        return mahasiswaService.addMahasiswa(mahasiswa);
    }

    @GetMapping("/search")
    public List<Mahasiswa> getMahasiswaByJurusan(@RequestParam String jurusan) {
        return mahasiswaService.getMahasiswaByJurusan(jurusan);
    }
    
    @PutMapping("/update")
    public int updateKelasByNim(@RequestParam String nim,@RequestParam String kelas) {
    	getNim(nim);
    	return mahasiswaService.updateKelasByNim(nim, kelas);
    }
    
    public String getNim(String nim) {
    	System.out.println("Mahasiswa dengan nim " + nim + " berhasil di update");
    	return nim;
    }
}