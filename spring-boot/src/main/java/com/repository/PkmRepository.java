package com.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

import com.model.Pkm;

public interface PkmRepository extends JpaRepository<Pkm, String> {
	
	
	@Query(value = "SELECT pkm FROM Pkm pkm JOIN RiwayatPkm riwayat ON pkm.id_pengabdian = riwayat.id_pengabdian WHERE riwayat.id_dosen = :idDosen")
	List<Pkm> getPkmByDosenId(@Param("idDosen") String idDosen);
	
	@Query("SELECT p.id_pengabdian FROM Pkm p WHERE p.judul_pengabdian = :judul")
    List<String> findIdByJudulPengabdian(@Param("judul") String judul);
	
	@Query("SELECT p FROM Pkm p WHERE p.judul_pengabdian LIKE %:judul%")
	List<Pkm> searchByJudulPengabdian(@Param("judul") String judul);
}
