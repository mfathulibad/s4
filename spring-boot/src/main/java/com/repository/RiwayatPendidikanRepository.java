package com.repository;

import javax.transaction.Transactional;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.RiwayatPendidikan;

public interface RiwayatPendidikanRepository extends JpaRepository<RiwayatPendidikan, String> {

    @Query(value = "SELECT riwayatPendidikan FROM RiwayatPendidikan riwayatPendidikan WHERE riwayatPendidikan.id_dosen = :idDosen")
    List<RiwayatPendidikan> getRiwayatPendidikanByDosenId(@Param("idDosen") String idDosen);
}
