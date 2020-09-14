function queryPost(obj, name) {
    let props;
    let i = 0;
    props = ["id", "name", "jenis_kel", "tanggal_lahir", "tanggal_sapih", "father_name", "father_id", "mother_name", "mother_id", "berat_lahir", "berat_1bln", "berat_3bln", "berat_6bln", "berat_1thn"]
    let query = "UPDATE BOER_INFO SET "
    Object.values(obj).forEach(value => {
        if (value != "") {
            if (i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 7) {
                if (i == 3 || i == 4) value = dateReverse(value)
                query += props[i] + "='" + value + "', "
            } else if (i == 13) query += props[i] + "=" + value + " "
            else query += props[i] + "=" + value + ", "
        } else {
            if (i != 13) query += props[i] + "= null, "
            else query += props[i] + "=" + null + " "
        }
        i += 1
    })
    query += "WHERE NAME='" + name + "'"
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