const { Model, DataTypes } = require('sequelize');

class Smartphone extends Model {
    static init(sequelize) {
        super.init({
            url: DataTypes.TEXT,
            name: DataTypes.TEXT,
            brand: DataTypes.TEXT,
            mainimage: DataTypes.TEXT,
            otherimages: DataTypes.ARRAY(DataTypes.TEXT),
            os: DataTypes.TEXT,
            chipset: DataTypes.TEXT,
            cpu: DataTypes.TEXT,
            gpu: DataTypes.TEXT,
            externalmem: DataTypes.TEXT,
            internalmem: DataTypes.TEXT,
            antutu8: DataTypes.TEXT,
            antutu7: DataTypes.TEXT,
            geekbenchsingle5: DataTypes.TEXT,	
            geekbenchmulti5: DataTypes.TEXT,
            geekbenchsingle4: DataTypes.TEXT,
            geekbenchmulti4: DataTypes.TEXT,
            maincamera: DataTypes.TEXT,
            mainespecifications: DataTypes.ARRAY(DataTypes.TEXT),	
            mainfunctions: DataTypes.ARRAY(DataTypes.TEXT),
            mainvideo: DataTypes.TEXT,
            maindxomarkscore: DataTypes.TEXT,	
            maindxomarkphoto: DataTypes.TEXT,
            maindxomarkvideo: DataTypes.TEXT,
            selfiecamera: DataTypes.TEXT,
            selfieespecifications: DataTypes.ARRAY(DataTypes.TEXT),	
            selfiefunctions: DataTypes.ARRAY(DataTypes.TEXT),
            selfievideo: DataTypes.ARRAY(DataTypes.TEXT),
            selfiedxomarkscore: DataTypes.TEXT,
            selfiedxomarkphoto: DataTypes.TEXT,
            selfiedxomarkvideo: DataTypes.TEXT,
            technology: DataTypes.TEXT,
            numbercolors: DataTypes.TEXT,
            inches: DataTypes.TEXT,
            screenarea: DataTypes.TEXT,
            format: DataTypes.TEXT,
            resolution: DataTypes.TEXT,
            pixelsdensity: DataTypes.TEXT,
            protection: DataTypes.ARRAY(DataTypes.TEXT),
            screenextrafeatures: DataTypes.ARRAY(DataTypes.TEXT),	
            release: DataTypes.TEXT,
            dimensions: DataTypes.TEXT,
            weight: DataTypes.TEXT,
            material: DataTypes.TEXT,
            colors: DataTypes.TEXT,
            battery: DataTypes.TEXT,
            batterylife: DataTypes.TEXT,
            sim: DataTypes.TEXT,
            network: DataTypes.TEXT,
            speed: DataTypes.TEXT,
            gprs: DataTypes.TEXT,
            edge: DataTypes.TEXT,
            wifi: DataTypes.TEXT,
            gps: DataTypes.TEXT,
            nfc: DataTypes.TEXT,
            usb: DataTypes.TEXT,
            bluetooth: DataTypes.TEXT,
            irradiation: DataTypes.TEXT,
            radio: DataTypes.TEXT,
            headphonejack: DataTypes.TEXT,	
            others: DataTypes.TEXT,
            otherfeatures: DataTypes.ARRAY(DataTypes.TEXT),
            sensors: DataTypes.TEXT,
        }, {
            sequelize
        })
    }
}

module.exports = Smartphone;