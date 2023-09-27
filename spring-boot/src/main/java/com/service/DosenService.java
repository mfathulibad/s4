package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.DosenRepository;
import java.util.List;
import java.util.Random;

import com.model.Dosen;

@Service
public class DosenService {
	@Autowired
	DosenRepository dosenRepository;
	
	public List<Dosen> getAllDosen(){
		return dosenRepository.findAll();
	}
	
	public Dosen getDosenById(String id_dosen) {
		return dosenRepository.getById(id_dosen);
	}
	
	public void addDosen(Dosen dosenRequest) {
		String nidn = dosenRequest.getNidn();
		String email = dosenRequest.getEmail();
		String nama_lengkap = dosenRequest.getNama_lengkap();
		String jabatan_fungsional = dosenRequest.getJabatan_fungsional();
		String jurusan = dosenRequest.getJurusan();

		String CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
		String DIGITS = "0123456789";
		Random RANDOM = new Random();
		 // Generate 1 random uppercase character
		char randomChar = (char) (CHARACTERS.charAt(RANDOM.nextInt(CHARACTERS.length())) - 32); // -32 to convert to uppercase

		// Generate 2 random lowercase characters
		StringBuilder password = new StringBuilder();
		password.append(randomChar);
		for (int i = 0; i < 2; i++) {
			char randomLowerChar = CHARACTERS.charAt(RANDOM.nextInt(CHARACTERS.length()));
			password.append(randomLowerChar);
		}

		// Generate 5 random digits
		for (int i = 0; i < 5; i++) {
			char randomDigit = DIGITS.charAt(RANDOM.nextInt(DIGITS.length()));
			password.append(randomDigit);
		}

		dosenRepository.addDosen(
			nidn,
			password.toString(),
			email,
			nama_lengkap,
			jabatan_fungsional,
			jurusan
		);
	}
	
	public void deleteDosen(String id_dosen) {
		dosenRepository.deleteById(id_dosen);
	}
	
	public void updateDosen(Dosen dosenRequest) {
		dosenRepository.save(dosenRequest);
	}
}
