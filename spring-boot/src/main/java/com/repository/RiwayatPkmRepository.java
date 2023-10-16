package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.RiwayatPkm;
import com.model.Dosen;

public interface RiwayatPkmRepository extends JpaRepository<RiwayatPkm, String> {

    @Query("SELECT d FROM Dosen d " + 
           "INNER JOIN RiwayatPkm rp ON d.id_dosen = rp.id_dosen " +
           "WHERE rp.id_pengabdian = :idPengabdian")
    List<Dosen> findDosenIdsByPkmId(@Param("idPengabdian") String idPengabdian);
}
