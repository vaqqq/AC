const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

function searchFiles(folderPath, targetFile) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error while reading the folder:", err);
      return;
    }

    if (files.includes(targetFile)) {
      console.log(`File ${targetFile} found!`);
      openBlockScreen(targetFile);
    } else {
      console.log(`File ${targetFile} not found.`);
    }
  });
}

function openBlockScreen(filename) {
  const blockScreenPath = path.join(__dirname, "blockScreen.html");
  exec(`start "" "${blockScreenPath}" "${targetFile}"`);
}

const baseFolderPath = "C:/Users/***/AppData/Roaming/PC7";
const subFolderPath = "PC7Scripts";
const folderPath = path.join(baseFolderPath, subFolderPath);
const targetFile = "testEXE.exe";
searchFiles(folderPath, targetFile);