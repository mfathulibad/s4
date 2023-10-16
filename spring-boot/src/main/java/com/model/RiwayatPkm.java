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
@Table (name = "riwayat_pkm")
public class RiwayatPkm {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String id_riwayat_pkm;
	
	@Column
    private String id_pengabdian;
    
    @Column
    private String id_dosen;

	public String getId_riwayat_pkm() {
		return id_riwayat_pkm;
	}

	public void setId_riwayat_pkm(String id_riwayat_pkm) {
		this.id_riwayat_pkm = id_riwayat_pkm;
	}

	public String getId_pengabdian() {
		return id_pengabdian;
	}

	public void setId_pengabdian(String id_pengabdian) {
		this.id_pengabdian = id_pengabdian;
	}

	public String getId_dosen() {
		return id_dosen;
	}

	public void setId_dosen(String id_dosen) {
		this.id_dosen = id_dosen;
	}
	
}
