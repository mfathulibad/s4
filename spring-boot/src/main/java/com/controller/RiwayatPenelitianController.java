package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.service.RiwayatPenelitianService;

import java.util.List;

@RestController
@CrossOrigin
public class RiwayatPenelitianController {

    @Autowired
    private RiwayatPenelitianService riwayatPenelitianService;

    @GetMapping("/riwayat_penelitian/authors/{idPenelitian}")
    public ResponseEntity<List<String>> findDosenIdsByPenelitianId(@PathVariable("idPenelitian") String idPenelitian) {
        List<String> dosenIds = riwayatPenelitianService.findDosenIdsByPenelitianId(idPenelitian);
        if (dosenIds != null && !dosenIds.isEmpty()) {
            return ResponseEntity.ok(dosenIds);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
