package com.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "dosen")
public class Dosen{
    @Id
    @Column
    private String id_dosen;
    @Column
    private String id_user;
    @Column
    private String email;
    @Column
    private String nama_lengkap;
    @Column
    private String jabatan_fungsional;
    @Column
    private String jurusan;
    
	public String getId_dosen() {
		return id_dosen;
	}
	public void setId_dosen(String id_dosen) {
		this.id_dosen = id_dosen;
	}
	public String getId_user() {
		return id_user;
	}
	public void setId_user(String id_user) {
		this.id_user = id_user;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNama_lengkap() {
		return nama_lengkap;
	}
	public void setNama_lengkap(String nama_lengkap) {
		this.nama_lengkap = nama_lengkap;
	}
	public String getJabatan_fungsional() {
		return jabatan_fungsional;
	}
	public void setJabatan_fungsional(String jabatan_fungsional) {
		this.jabatan_fungsional = jabatan_fungsional;
	}
	public String getJurusan() {
		return jurusan;
	}
	public void setJurusan(String jurusan) {
		this.jurusan = jurusan;
	} 
	
    
}
