package com.repository;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Penelitian;

public interface PenelitianRepository extends JpaRepository<Penelitian, String> {
//    @Transactional
//    @Modifying(clearAutomatically = true)
//    @Query(value = "SELECT insert_penelitian(:judul_penelitian, :bidang_penelitian, :tgl_penelitian, :url, :id_dosen)", nativeQuery = true)
//    String addPenelitian(
//        @Param("judul_penelitian") String judul_penelitian,
//        @Param("bidang_penelitian") String bidang_penelitian,
//        @Param("tgl_penelitian") LocalDate tgl_penelitian,
//        @Param("url") String url,
//        @Param("id_dosen") String id_dosen
//    );
}
