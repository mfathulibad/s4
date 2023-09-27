package com.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import com.model.Dosen;

public interface DosenRepository extends JpaRepository<Dosen, String> {
	@Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "CALL insert_dosen(:nidn, :password, :email, :nama_lengkap, :jabatan_fungsional, :jurusan)", nativeQuery = true)
    void addDosen(
        @Param("nidn") String nidn,
        @Param("password") String password,
        @Param("email") String email,
        @Param("nama_lengkap") String nama_lengkap,
        @Param("jabatan_fungsional") String jabatan_fungsional,
        @Param("jurusan") String jurusan
    );

}
