import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize

const Event = db.define('pengajuan_event', {
   nama_event:{
      type: DataTypes.STRING
   },
   jenis_event:{
      type: DataTypes.STRING
   },
   cara_transaksi:{
      type: DataTypes.STRING
   },
   tgl_mulai:{
      type: DataTypes.DATE
   },
   tgl_berakhir:{
      type: DataTypes.DATE
   },
   deskripsi:{
      type: DataTypes.STRING
   },
   foto: {
      type: DataTypes.BLOB('1mb'),
      allowNull: true,
      validate: {
        max: 1024 * 1024, // 1 MB in bytes
      }
   }
},{
   freezeTableName:true
})

export default Event