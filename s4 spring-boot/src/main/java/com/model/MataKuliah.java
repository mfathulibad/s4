package com.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MataKuliah")
public class MataKuliah {
	
	@Id
    @Column
    private String id_mata_kuliah;
    @Column
    private String nama_mata_kuliah;
    @Column
    private String semester;
    @Column
    private String kode_kelas;
    @Column
    private String perguruan_tinggi;
	public String getId_mata_kuliah() {
		return id_mata_kuliah;
	}
	
	public void setId_mata_kuliah(String id_mata_kuliah) {
		this.id_mata_kuliah = id_mata_kuliah;
	}
	public String getNama_mata_kuliah() {
		return nama_mata_kuliah;
	}
	public void setNama_mata_kuliah(String nama_mata_kuliah) {
		this.nama_mata_kuliah = nama_mata_kuliah;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}
	public String getKode_kelas() {
		return kode_kelas;
	}
	public void setKode_kelas(String kode_kelas) {
		this.kode_kelas = kode_kelas;
	}
	public String getPerguruan_tinggi() {
		return perguruan_tinggi;
	}
	public void setPerguruan_tinggi(String perguruan_tinggi) {
		this.perguruan_tinggi = perguruan_tinggi;
	}
    
}
