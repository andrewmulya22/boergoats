function queryPost(obj) {
    let props;
    let i = 0;
    if (obj.inputeartag == "") {
        props = ["id", "name", ", jenis_kel", ", tanggal_lahir", ", tanggal_sapih", ", father_name", ", father_id", ", mother_name", ", mother_id", ", berat_lahir", ", berat_1bln", ", berat_3bln", ", berat_6bln", ", berat_1thn"]
    } else {
        props = ["id", ", name", ", jenis_kel", ", tanggal_lahir", ", tanggal_sapih", ", father_name", ", father_id", ", mother_name", ", mother_id", ", berat_lahir", ", berat_1bln", ", berat_3bln", ", berat_6bln", ", berat_1thn"]
    }
    let j = 0;
    let query = "INSERT INTO BOER_INFO ("
    Object.values(obj).forEach(value => {
        if (i == 0) {
            if (obj.inputeartag != "") query += props[i]
        } else {
            if (value != null && value != "") {
                query += props[i]
            }
        }
        i += 1
    })
    query += ") VALUES ("
    Object.values(obj).forEach(value => {
        if (j == 0) {
            query += value
        } else if (j == 6 || j >= 8) {
            if (value != null && value != "") {
                query += ", " + value
            }
        } else {
            if (value != null && value != "" && obj.inputeartag != "") {
                if (j == 3 || j == 4) {
                    value = dateReverse(value)
                }
                query += ", '" + value + "'"
            } else if (value != null && value != "" && obj.inputeartag == "") {
                if (j == 3 || j == 4) {
                    value = dateReverse(value)
                }
                if (j == 1) query += "'" + value + "'"
                else query += ", '" + value + "'"
            }
        }
        j += 1
    })
    query += ")"
    return query
}

function dateReverse(data) {
    let reversedData = ""
    for (i = 6; i <= 9; i++) {
        reversedData += data[i]
    }
    reversedData += "-" + data[3] + data[4] + "-" + data[0] + data[1]
    return reversedData
}

module.exports = queryPost