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

//	@Transactional
//    @Modifying(clearAutomatically = true)
//    @Query(value = "CALL insert_pkm(:judul_pengabdian, :bidang_pengabdian, :tgl_pengabdian, :url, :id_dosen)", nativeQuery = true)
//    String addPkm(
//        @Param("judul_pengabdian") String judul_pengabdian,
//        @Param("bidang_pengabdian") String bidang_pengabdian,
//        @Param("tgl_pengabdian") LocalDate tgl_pengabdian,
//        @Param("url") String url,
//        @Param("id_dosen") String id_dosen
//    );
	
}
