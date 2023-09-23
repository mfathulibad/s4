package com.model;

import javax.persistence.Entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pkm")
public class Pkm{
    @Id
    @Column
    private String id_pengabdian;
    @Column
    private String judul_pengabdian;
    @Column
    private String bidang_pengabdian;
    @Column
    private LocalDate tgl_pengabdian;
    
	public String getId_pengabdian() {
		return id_pengabdian;
	}
	public void setId_pengabdian(String id_pengabdian) {
		this.id_pengabdian = id_pengabdian;
	}
	public String getJudul_pengabdian() {
		return judul_pengabdian;
	}
	public void setJudul_pengabdian(String judul_pengabdian) {
		this.judul_pengabdian = judul_pengabdian;
	}
	public String getBidang_pengabdian() {
		return bidang_pengabdian;
	}
	public void setBidang_pengabdian(String bidang_pengabdian) {
		this.bidang_pengabdian = bidang_pengabdian;
	}
	public LocalDate getTgl_pengabdian() {
		return tgl_pengabdian;
	}
	public void setTgl_pengabdian(LocalDate tgl_pengabdian) {
		this.tgl_pengabdian = tgl_pengabdian;
	} 
    
    
}
