import Pengguna from "../models/ModelPengguna.js"
import bcrypt from "bcrypt"

export const  getPengguna = async(req, res) => {
   try {
      const pengguna = await Pengguna.findAll()
      res.json(pengguna)
   } catch (error) {
      console.log(error)
   }
}

export const Register = async(req, res) => {
   const {penyelenggara, agama, kota_asal_penyelenggara, email, password, no_hp} = req.body
   const salt = await bcrypt.genSalt()
   const hashPassword = await bcrypt.hash(password, salt)
   try {
      await Pengguna.create({
         penyelenggara: penyelenggara,
         agama: agama,
         kota_asal_penyelenggara: kota_asal_penyelenggara,
         email: email,
         password: hashPassword,
         no_hp: no_hp
      })
      res.json({
         message: "Berhasil registrasi...!"
      })
   } catch (error) {
      console.log(error)
   }
}

export const Login = async(req, res) => {
   try {
      const pengguna = await Pengguna.findAll({
         where:{
            email: req.body.email
         }
      })
      const match = await bcrypt.compare(req.body.password, pengguna[0].password)
      if(!match) return res.status(400).json({
            message: "Password atau username salah...!"
         })
      res.json({
         message: "Berhasil login...!"
      })
   } catch (error) {
      res.status(404).json({
         message: "Akun tidak ditemukan...!"
      })
   }
}