package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "riwayat_penelitian")
public class RiwayatPenelitian {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String id_riwayat_penelitian;
    
    @Column
    private String id_penelitian;
    
    @Column
    private String id_dosen;

	public String getId_riwayat_penelitian() {
		return id_riwayat_penelitian;
	}

	public void setId_riwayat_penelitian(String id_riwayat_penelitian) {
		this.id_riwayat_penelitian = id_riwayat_penelitian;
	}

	public String getId_penelitian() {
		return id_penelitian;
	}

	public void setId_penelitian(String id_penelitian) {
		this.id_penelitian = id_penelitian;
	}

	public String getId_dosen() {
		return id_dosen;
	}

	public void setId_dosen(String id_dosen) {
		this.id_dosen = id_dosen;
	}

    
}

