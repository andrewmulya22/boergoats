function tableTag(data) {
    let table = "";
    for (i = 0; i < data.length; i++) {
        let funcName
        let id = formatID(data[i].id)
        let name = nullCheck(data[i].name)
        if (data[i].id == null) funcName = 'getDataName("' + encodeURIComponent(name) + '")'
        else funcName = 'getDataID(' + data[i].id + ')'
        table += "<tr class='counterRow'><td class='eartag'>" + id + "</td><td class='name'>" + name + "</td><td><button type='button' class='btn btn-primary' onclick=" + funcName + "><i class='fa fa-search' aria-hidden='true'></i></button></td></td></tr>"
    }
    return table
}

function formatID(data) {
    if (data == null) {
        return ""
    } else if (data < 10) {
        return "00" + data
    } else if (data > 10 && data < 100) {
        return "0" + data
    } else {
        return data
    }
}

function nullCheck(data) {
    if (data == null) {
        return "";
    } else {
        return data
    }
}

module.exports = tableTag