package com.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "riwayat_pendidikan")
public class RiwayatPendidikan{
    @Id
    @Column
    private String id_riwayat_pendidikan;
    @Column
    private String id_dosen;
    @Column
    private String jenjang_pendidikan;
    @Column
    private String institusi;
    @Column
    private int tahun_lulus;

    public String getId_riwayat_pendidikan() {
        return id_riwayat_pendidikan;
    }
    public void setId_riwayat_pendidikan(String id_riwayat_pendidikan) {
        this.id_riwayat_pendidikan = id_riwayat_pendidikan;
    }
    public String getId_dosen() {
        return id_dosen;
    }
    public void setId_dosen(String id_dosen) {
        this.id_dosen = id_dosen;
    }
    public String getJenjang_pendidikan() {
        return jenjang_pendidikan;
    }
    public void setJenjang_pendidikan(String jenjang_pendidikan) {
        this.jenjang_pendidikan = jenjang_pendidikan;
    }
    public String getInstitusi() {
        return institusi;
    }
    public void setInstitusi(String institusi) {
        this.institusi = institusi;
    }
    public int getTahun_lulus() {
        return tahun_lulus;
    }
    public void setTahun_lulus(int tahun_lulus) {
        this.tahun_lulus = tahun_lulus;
    }
       
}
