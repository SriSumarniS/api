import express from "express"
import { getPengguna, Register, Login } from "../handler/Pengguna.js"
import { getEvent, PengajuanEvent } from "../handler/Event.js"
import { getDonasi, DonasiMasuk } from "../handler/Donasi.js"


const router = express.Router()

router.get("/", (req, res) => {
   res.send("<h1>Home Page</h1>")
})
router.get('/pengguna', getPengguna)
router.post('/pengguna', Register)
router.post('/login', Login)
router.get('/donasi', getDonasi)
router.post('/donasi', DonasiMasuk)
router.get('/event', getEvent)
router.post('/event', PengajuanEvent)
export default router