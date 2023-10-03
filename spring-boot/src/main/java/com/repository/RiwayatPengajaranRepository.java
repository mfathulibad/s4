package com.repository;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.model.MataKuliah;
import com.model.RiwayatPengajaran;

public interface RiwayatPengajaranRepository extends JpaRepository <RiwayatPengajaran, String> {
    
}
