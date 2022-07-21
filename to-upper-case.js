const { readFileSync, promises: fsPromises } = require('fs');
var fs = require('fs');

let ucArrayFinal = []
async function asyncReadFile(filename) {
    try {
        const contents = await fsPromises.readFile(filename, 'utf-8');

        const arr = contents.split(/\r?\n/);

        // console.log(arr);
        let array = [];
        for (var i = 0; i < arr.length; i++) {
            array[i] = arr[i].split('=');
        }
        // console.log(array);
        let ucArray = [];
        let getInside = array.map(arr2 => {
            for (var i = 0; i < arr2.length / 2; i++) {
                var file = fs.createWriteStream('array.txt');
                if (arr2[1] == undefined || arr2[1] == '') {
                    // ucArrayFinal[i] = arr2[0].toUpperCase().trim()
                    ucArrayFinal.push(arr2[0].toUpperCase().trim())
                } else {
                    // ucArrayFinal[i] = arr2[0].toUpperCase().trim() + "=" + arr2[1].trimStart();
                    ucArrayFinal.push(arr2[0].toUpperCase().trim() + "=" + arr2[1].trimStart())
                }
            }
            // console.log(ucArray);
            // finalArr.push(ucArrayFinal)

        })
        console.log(ucArrayFinal);
        var file = fs.createWriteStream('array.txt');
        file.on('error', function (err) { console.log(err); });
        ucArrayFinal.forEach(function (v) { file.write(v+ '\n'); });
        file.end();

    } catch (err) {
        console.log(err);
    }
}
asyncReadFile('./mytext.txt');

