async function tableTag(data, data2) {
    let table = "";
    for (i = 0; i < data.length; i++) {
        let farmname;
        for (j = 0; j < data2.length; j++) {
            if (data[i].id >= data2[j].MINTAG && data[i].id <= data2[j].MAXTAG) {
                farmname = data2[j].FARMNAME
            }
        }
        if (farmname == null) farmname = ""
        let id = nullCheckID(data[i].id)
        let name = nullCheck(data[i].name)
        let father_name = nullCheckName(data[i].father_name, data[i].father_id);
        let mother_name = nullCheckName(data[i].mother_name, data[i].mother_id);
        let jeniskel = formatJenisKel(data[i].jenis_kel)
        let tanggal_lahir = formatTanggal(data[i].tanggal_lahir)
        let tanggal_sapih = formatTanggal(data[i].tanggal_sapih)
        let berat_lahir = nullCheck(data[i].berat_lahir);
        let berat_1bln = nullCheck(data[i].berat_1bln);
        let berat_3bln = nullCheck(data[i].berat_3bln)
        let berat_6bln = nullCheck(data[i].berat_6bln);
        let berat_1thn = nullCheck(data[i].berat_1thn)
        if (data[i].id == null) {
            table += "<tr class='counterRow'><td>" + (i + 1) + "</td><td class='eartag'>" + id + "</td><td>" + farmname + "</td><td><a class='name' href='/profile/name/" + data[i].name + "'>" + name + "</a></td><td>" + jeniskel + "</td><td>" + tanggal_lahir + "</td><td>" + father_name + "</td><td>" + mother_name + "</td><td>" + berat_lahir + "</td><td>" + tanggal_sapih + "</td><td>" + berat_1bln + "</td><td>" + berat_3bln + "</td><td>" + berat_6bln + "</td><td>" + berat_1thn + "</td><td class='tabEditDelete'><a href='/edit/name/" + data[i].name + "'><i class='fa fa-pencil' aria-hidden='true'></a></></td><td class='deleteButton tabEditDelete'><button class='btn btnname' id='" + data[i].name + "'><i class='fa fa-trash' aria-hidden='true'></i></button></td></tr>"
        } else if (data[i].name == null) {
            table += "<tr class='counterRow'><td>" + (i + 1) + "</td><td><a class='eartag' href='/profile/id/" + data[i].id + "'>" + id + "</a></td><td>" + farmname + "</td><td class='name'>" + name + "</td><td>" + jeniskel + "</td><td>" + tanggal_lahir + "</td><td>" + father_name + "</td><td>" + mother_name + "</td><td>" + berat_lahir + "</td><td>" + tanggal_sapih + "</td><td>" + berat_1bln + "</td><td>" + berat_3bln + "</td><td>" + berat_6bln + "</td><td>" + berat_1thn + "</td><td class='tabEditDelete'><a href='/edit/id/" + data[i].id + "'><i class='fa fa-pencil' aria-hidden='true'></a></></td><td class='deleteButton tabEditDelete'><button class='btn btnid' id='" + data[i].id + "'><i class='fa fa-trash' aria-hidden='true'></i></button></td></tr>"
        } else {
            table += "<tr class='counterRow'><td>" + (i + 1) + "</td><td><a class='eartag' href='/profile/id/" + data[i].id + "'>" + id + "</a></td><td>" + farmname + "</td><td><a class='name' href='/profile/name/" + data[i].name + "'>" + name + "</a></td><td>" + jeniskel + "</td><td>" + tanggal_lahir + "</td><td>" + father_name + "</td><td>" + mother_name + "</td><td>" + berat_lahir + "</td><td>" + tanggal_sapih + "</td><td>" + berat_1bln + "</td><td>" + berat_3bln + "</td><td>" + berat_6bln + "</td><td>" + berat_1thn + "</td><td class='tabEditDelete'><a href='/edit/id/" + data[i].id + "'><i class='fa fa-pencil' aria-hidden='true'></a></></td><td class='deleteButton tabEditDelete'><button class='btn btnid' id='" + data[i].id + "'><i class='fa fa-trash' aria-hidden='true'></i></button></td></tr>"
        }
    }
    return table
}

function formatID(data) {
    if (data == null) {
        return ""
    } else if (data < 10) {
        return "FB 00" + data
    } else if (data > 10 && data < 100) {
        return "FB 0" + data
    } else {
        return "FB " + data
    }
}

function formatJenisKel(data) {
    if (data == "Laki-laki") {
        return "L"
    } else {
        return "P"
    }
}

function formatTanggal(data) {
    if (data == null) {
        return "";
    }
    const monthName = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"]
    return data.getDate() + "-" + monthName[data.getMonth()] + "-" + data.getFullYear()
}

function nullCheckID(data) {
    if (data == null) {
        return "";
    } else {
        return formatID(data)
    }
}

function nullCheck(data) {
    if (data == null) {
        return "";
    } else {
        return data
    }
}

function nullCheckName(name, id) {
    if (name == null && id == null) {
        return "";
    } else if (name == null && id != null) {
        return "(" + formatID(id) + ")"
    } else {
        return name + "(" + formatID(id) + ")"
    }
}

module.exports = tableTag