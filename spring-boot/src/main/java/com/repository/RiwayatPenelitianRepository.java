package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.RiwayatPenelitian;

public interface RiwayatPenelitianRepository extends JpaRepository<RiwayatPenelitian, String> {

    @Query("SELECT d.nama_lengkap FROM Dosen d " +
           "INNER JOIN RiwayatPenelitian rp ON d.id_dosen = rp.id_dosen " +
           "WHERE rp.id_penelitian = :idPenelitian")
    List<String> findDosenIdsByPenelitianId(@Param("idPenelitian") String idPenelitian);
}
