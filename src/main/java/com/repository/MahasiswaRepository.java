package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Mahasiswa;  

@Repository
public interface MahasiswaRepository extends JpaRepository<Mahasiswa, String>{
	@Query("SELECT m FROM Mahasiswa m WHERE m.jurusan= :jurusan")
    List<Mahasiswa> findByJurusan(@Param("jurusan") String jurusan);
	
	@Modifying
	@Query("UPDATE Mahasiswa SET kelas = :kelas WHERE nim = :nim")
	int updateKelasByNim(@Param("nim") String nim, @Param("kelas") String kelas);
	
}
