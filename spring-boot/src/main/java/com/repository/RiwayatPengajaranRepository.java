package com.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Dosen;
import com.model.RiwayatPengajaran;

public interface RiwayatPengajaranRepository extends JpaRepository <RiwayatPengajaran, String> {
    @Query("SELECT d FROM Dosen d " + 
           "INNER JOIN RiwayatPengajaran rp ON d.id_dosen = rp.id_dosen " +
           "WHERE rp.id_mata_kuliah = :idMatakuliah")
    List<Dosen> findDosenIdsByPengajaranId(@Param("idMatakuliah") String idMatakuliah);
}
