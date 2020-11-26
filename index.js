const fs = require('fs');

let content = fs.readFileSync("./index.js");

console.log(content);



const fileWrite = (file, content) => {
    return new Promise((success, fail) => {
      fs.writeFile(file,content,err => {
          if(err) {

       return fail(err);

    }
    return success();
      });
   });
};

const fileAppend = (file, content) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, content, err => {
            if (err) {
                return fail(err);
            }
            return success();
        })
    })
};

const fileRead = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(data);
        })
    });
};
const fileOps = async () => {
    try {
        await fileWrite('data.txt', 'TEST');
        await fileAppend('data.txt', '✪✪✪');
        let c = await fileRead('data.txt');
        console.log(c);
    } catch(err) {
        console.log(err);
    }
};

fileOps();