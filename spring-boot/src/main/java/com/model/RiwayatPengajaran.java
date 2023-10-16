package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name = "riwayat_pengajaran")
public class RiwayatPengajaran {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String id_riwayat_pengajaran;
	
	@Column
    private String id_mata_kuliah;
    
    @Column
    private String id_dosen;

	public String getId_riwayatpengajaran() {
		return id_riwayat_pengajaran;
	}

	public void setId_riwayatpengajaran(String id_riwayatpengajaran) {
		this.id_riwayat_pengajaran = id_riwayatpengajaran;
	}

	public String getId_mata_kuliah() {
		return id_mata_kuliah;
	}

	public void setId_mata_kuliah(String id_mata_kuliah) {
		this.id_mata_kuliah = id_mata_kuliah;
	}

	public String getId_dosen() {
		return id_dosen;
	}

	public void setId_dosen(String id_dosen) {
		this.id_dosen = id_dosen;
	}

	
	
}