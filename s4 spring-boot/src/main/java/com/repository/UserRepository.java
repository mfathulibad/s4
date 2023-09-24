package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
//	@Query("SELECT m FROM Mahasiswa m WHERE m.jurusan= :jurusan")
//    List<Mahasiswa> findByJurusan(@Param("jurusan") String jurusan);
//	
//	@Modifying
//	@Query("UPDATE Mahasiswa SET kelas = :kelas WHERE nim = :nim")
//	int updateKelasByNim(@Param("nim") String nim, @Param("kelas") String kelas);
	
	@Query("SELECT u.username FROM User u")
	List<String> getUsername();
	
}
