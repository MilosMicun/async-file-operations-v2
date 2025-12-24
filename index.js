const fs = require("fs/promises");

async function readFiles() {
  try {
    const files = await fs.readdir("./files");

    const readOperations = files.map(file =>
      fs.readFile(`./files/${file}`, "utf-8")
      .then(content => ({ file, content }))
    );

    const results = await Promise.allSettled(readOperations);

    for (const result of results) {
      if (result.status === "fulfilled") {
        console.log(`${result.value.file}:\n${result.value.content}\n-----`);
      } else {
        console.error(`Error reading file ${result.reason}`); 
      }
    }

  } catch (err) {
    console.error("Critical error:", err.message);
  }
}

readFiles();


