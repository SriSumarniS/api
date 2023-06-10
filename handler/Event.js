import Event from "../models/ModelEvent.js";

export const getEvent = async(req, res) => {
   try {
      const event = await Event.findAll()
      res.json(event)
   } catch (error) {
      console.log(error)
   }
}

export const PengajuanEvent = async(req, res) => {
   const {nama_event, jenis_event, cara_transaksi, tgl_mulai, tgl_berakhir, deskripsi, foto} = req.body
   try {
      await PengajuanEvent.create({
         nama_event: nama_event,
         jenis_event: jenis_event,
         cara_transaksi: cara_transaksi,
         tgl_mulai: tgl_mulai,
         tgl_berakhir: tgl_berakhir,
         deskripsi: deskripsi,
         foto: foto
      })
      res.json({
         message: "Pengajuan berhasil...!"
      })
   } catch (error) {
      console.log(error)
   }
}