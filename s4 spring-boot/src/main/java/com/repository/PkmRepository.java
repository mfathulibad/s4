package com.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Pkm;

public interface PkmRepository extends JpaRepository<Pkm, String> {
	
//	@Modifying
//    @Transactional
//    @Query(value = "INSERT INTO dosen (id_dosen, id_user, email, nama_lengkap, jabatan_fungsional, jurusan) "
//    		+ "VALUES (dosen.id_dosen), :dosen.id_user, :dosen.email, :dosen.nama_lengkap"
//    		+ ":dosen.jabatan_fungsional, :dosen.jurusan)", nativeQuery = true)
//    void addDosen(@Param("dosen") Dosen dosen);
	
}
