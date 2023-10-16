package com.service;
import com.repository.RiwayatPenelitianRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RiwayatPenelitianService {

    @Autowired
    private RiwayatPenelitianRepository riwayatPenelitianRepository;

    public List<String> findDosenIdsByPenelitianId(String idPenelitian) {
        return riwayatPenelitianRepository.findDosenIdsByPenelitianId(idPenelitian);
    }
}
