import db from "../config/db.js";
import addEvent from "../models/ModelEvent.js";
import fs from "fs";

// get all event
export const getEvent = async(req, res) => {
   try {
      const event = await addEvent.findAll()
      res.json(event)
   } catch (error) {
      console.log(error)
   }
}

// add event
export const createPengajuanEvent = async (req, res) => {
   try {
     const { nama_event, jenis_event, cara_transaksi, tgl_mulai, tgl_berakhir, deskripsi } = req.body;
     const fotoBuffer = fs.readFileSync(req.file.path);
     //const url
     // query db
     // gabungin json yg 4
     // diparsing ke json
     // di hit API model
     // diparsing ke js object
     // ambil data let isfraud
     if (req.file.size > 1 * 1024 * 1024) {
       // Jika ukuran file foto melebihi 1 MB, kembalikan respons kesalahan
       fs.unlinkSync(req.file.path); // Hapus file foto yang diunggah
       return res.status(400).json({ message: 'Ukuran file foto melebihi batasan maksimal (1 MB)' });
     }
 
     const newPengajuanEvent = {
       nama_event: nama_event,
       jenis_event: jenis_event,
       cara_transaksi: cara_transaksi,
       tgl_mulai: tgl_mulai,
       tgl_berakhir: tgl_berakhir,
       deskripsi: deskripsi,
       foto: fotoBuffer
     };
 
     await addEvent.create(newPengajuanEvent);
 
     res.status(200).json({ message: 'Pengajuan event berhasil dibuat' });
     // tambah json (key:isfraud , value:hasil)
   } catch (error) {
     console.error('Terjadi kesalahan saat membuat pengajuan event:', error);
     res.status(500).json({ message: 'Gagal membuat pengajuan event' });
   }
 };

// delete event
export const hapusEventById = async (req, res) => {
   const { id } = req.params;
 
   try {
     const deleteEvent = await addEvent.findByPk(id);
 
     if (!deleteEvent) {
       return res.status(404).json({ message: 'Event tidak ditemukan...!' });
     }
 
     await deleteEvent.destroy();
 
     return res.status(200).json({ message: 'Event berhasil dihapus...!' });
   } catch (error) {
     console.error(error);
     return res.status(500).json({ message: 'Terjadi kesalahan saat menghapus event...!' });
   }
 };

// detail event
export const detailEvent = (req, res) => {
   const id = req.params.id
   const sql = `SELECT * FROM pengajuan_event WHERE id = ${id}`;

   db.query(sql, (err, result) => {
      if (err) {
         throw err;
      }
      if (result.length === 0) {
         res.status(404).json({ message: 'Event tidak ditemukan' });
      } else {
         res.status(200).json(result[0]);
      }
   })
 }

 // update event
 export const updateEventById = async (req, res) => {
   const { id } = req.params;
   const { nama_event, jenis_event, cara_transaksi, tgl_mulai, tgl_berakhir, deskripsi } = req.body;
   const fotoBuffer = fs.readFileSync(req.file.path);
 
     if (req.file.size > 1 * 1024 * 1024) {
       // Jika ukuran file foto melebihi 1 MB, kembalikan respons kesalahan
       fs.unlinkSync(req.file.path); // Hapus file foto yang diunggah
       return res.status(400).json({ message: 'Ukuran file foto melebihi batasan maksimal (1 MB)' });
     }
 
   try {
     const ubahEvent = await addEvent.findByPk(id);
 
     if (!ubahEvent) {
       return res.status(404).json({ message: 'Event tidak ditemukan...!' });
     }
 
     ubahEvent.nama_event = nama_event
     ubahEvent.jenis_event = jenis_event
     ubahEvent.cara_transaksi = cara_transaksi
     ubahEvent.tgl_mulai = tgl_mulai
     ubahEvent.tgl_berakhir = tgl_berakhir
     ubahEvent.deskripsi = deskripsi
     ubahEvent.foto = fotoBuffer
 
     await ubahEvent.save();
 
     return res.status(200).json({ message: 'Event berhasil diubah...!' });
   } catch (error) {
     console.error(error);
     return res.status(500).json({ message: 'Gagal mengubah event...!' });
   }
 }