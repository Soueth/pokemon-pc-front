const Timsort = require('timsort');
const fs = require('fs');

const jsonPath = '../assets/i18n/pt-br.json'
const json = require(jsonPath);

function sortJson(json) {
    const keys = Object.keys(json);

    Timsort.sort(keys, (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })

    const sortedJson = {};

    keys.forEach((key) => {
        sortedJson[key] = json[key];
    });

    return sortedJson;
}

const data = sortJson(json);

fs.writeFile(jsonPath, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log('O arquivo JSON foi ordenado e salvo com sucesso.');
});

