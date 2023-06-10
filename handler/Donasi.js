import Donasi from "../models/ModelDonasi.js"

export const  getDonasi = async(req, res) => {
   try {
      const donasi = await Donasi.findAll()
      res.json(donasi)
   } catch (error) {
      console.log(error)
   }
}

export const DonasiMasuk = async(req, res) => {
   const {jumlah_donasi} = req.body
   try {
      await Donasi.create({
         jumlah_donasi: jumlah_donasi
      })
      res.json({
         message: "Terima kasih atas partisipasinya, semoga apa yang diberikan bisa diganti dengan berlipat ganda :)"
      })
   } catch (error) {
      console.log(error)
   }
}