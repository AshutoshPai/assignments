import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import fs from "fs";
import { exit } from 'process';

const argv = yargs(hideBin(process.argv)).argv;

const { fileName } = argv;

const filePath = "./fileNames.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        const content = [];
        content.push(fileName);
        fs.writeFile("./fileNames.txt", JSON.stringify(content), () => { });
        fs.writeFile(`${fileName}.txt`, "You are awesome.", () => {
            console.log(`${fileName}.txt created`)
        });
        return false;
    }

    const content = JSON.parse(data);
    content.forEach((file) => {
        if (file == fileName) {
            console.log(`${fileName}.txt already exists. Please enter new filename`)
            exit();
        }
    })
    content.push(fileName);
    fs.writeFile("./fileNames.txt", JSON.stringify(content), () => { });
    fs.writeFile(`${fileName}.txt`, "You are awesome", () => {
        console.log(`${fileName}.txt created`)
    });
})
