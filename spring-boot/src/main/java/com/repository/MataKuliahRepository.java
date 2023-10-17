package com.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.model.MataKuliah;

public interface MataKuliahRepository extends JpaRepository<MataKuliah, String> {
    @Query(value = "SELECT mata_kuliah FROM MataKuliah mata_kuliah JOIN RiwayatPengajaran riwayat ON mata_kuliah.id_mata_kuliah = riwayat.id_mata_kuliah WHERE riwayat.id_dosen = :idDosen")
	List<MataKuliah> getMataKuliahbyDosenId(@Param("idDosen") String idDosen);

	@Query("SELECT p.id_mata_kuliah FROM MataKuliah p WHERE p.nama_mata_kuliah = :matkul")
    List<String> findIdByMatkul(@Param("matkul") String matkul);
	
	// Optional<MataKuliah> findByNamaMataKuliahAndSemester(String namaMataKuliah, String semester);

	// @Query("SELECT m.id_mata_kuliah FROM MataKuliah m WHERE m.nama_mata_kuliah = :namaMataKuliah AND m.semester = :semester")
	// List<String> findIdByMatkulAndSemester(@Param("namaMataKuliah") String namaMataKuliah, @Param("semester") String semester);
	
	
	@Query("SELECT p FROM MataKuliah p WHERE p.nama_mata_kuliah LIKE %:matkul%")
	List<MataKuliah> searchByMatkul(@Param("matkul") String matkul);
}   
