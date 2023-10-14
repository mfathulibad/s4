package com.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.MataKuliah;

public interface MataKuliahRepository extends JpaRepository<MataKuliah, String> {
    //@Query(value = "SELECT mata_kuliah FROM mata_kuliah mata_kuliah JOIN RiwayatPengajaran riwayat ON mata_kuliah.id_mata_kuliah = riwayat.id_mata_kuliah WHERE riwayat.id_dosen = :idDosen")
	//List<MataKuliah> getMataKuliahbyDosenId(@Param("idDosen") String idDosen);

	
}
