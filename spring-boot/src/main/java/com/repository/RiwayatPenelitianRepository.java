package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.RiwayatPenelitian;
import com.model.Dosen;

public interface RiwayatPenelitianRepository extends JpaRepository<RiwayatPenelitian, String> {

    @Query("SELECT d FROM Dosen d " + 
           "INNER JOIN RiwayatPenelitian rp ON d.id_dosen = rp.id_dosen " +
           "WHERE rp.id_penelitian = :idPenelitian")
    List<Dosen> findDosenIdsByPenelitianId(@Param("idPenelitian") String idPenelitian);
    
    @Query("SELECT rp.id_riwayat_penelitian FROM RiwayatPenelitian rp " + 
            "WHERE rp.id_dosen = :idDosen AND rp.id_penelitian = :idPenelitian")
    String findIdRiwayatPenelitianByDosenAndPenelitian(
             @Param("idDosen") String idDosen,
             @Param("idPenelitian") String idPenelitian);
}
