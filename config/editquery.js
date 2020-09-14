function formatSentData(data) {
    if (data == null) {
        return ""
    } else {
        let tanggal = data.getDate()
        let bulan = data.getMonth() + 1
        if (tanggal < 10) {
            tanggal = "0" + tanggal
        }
        if (bulan < 10) {
            bulan = "0" + bulan
        }
        data = tanggal + "-" + bulan + "-" + data.getFullYear()
        return data
    }
}

module.exports = formatSentData