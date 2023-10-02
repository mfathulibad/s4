package com.repository;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.RiwayatPenelitian;


public interface RiwayatPenelitianRepository extends JpaRepository<RiwayatPenelitian, String> {
    // Tambahan metode kustom (jika diperlukan) dapat ditambahkan di sini
}
