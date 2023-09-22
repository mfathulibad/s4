package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.model.Mahasiswa;
import com.repository.MahasiswaRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MahasiswaService {
    @Autowired
    MahasiswaRepository mahasiswaRepository;

    //Get all mahasiswa
    public List<Mahasiswa> getAllMahasiswa(){
        List<Mahasiswa> mahasiswa = new ArrayList<>();
        mahasiswaRepository.findAll().forEach(mahasiswa::add);
        return mahasiswa;
    }

    //Add mahasiswa
    public Mahasiswa addMahasiswa(Mahasiswa mahasiswa){
        return mahasiswaRepository.save(mahasiswa);
    }

    //Get mahasiswa by nim
    public Mahasiswa getMahasiswaByNim(String nim){
        return mahasiswaRepository.findById(nim).get();
    }
    
    public List<Mahasiswa> getMahasiswaByJurusan(String jurusan) {
    	return mahasiswaRepository.findByJurusan(jurusan);
    }
    
    @Transactional
    public int updateKelasByNim(String nim, String kelas) {
    	return mahasiswaRepository.updateKelasByNim(nim, kelas);
    }
}