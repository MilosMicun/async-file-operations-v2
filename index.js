const fs = require("fs/promises");

async function readFiles() {
  try {
    const files = await fs.readdir("./files");

    const readOperations = files.map(file =>
      fs.readFile(`./files/${file}`, "utf-8")
        .then(content => ({ file, content }))
        .catch(err => ({ file, error: err.message }))
    );

    const results = await Promise.allSettled(readOperations);

    for (const result of results) {
      if (result.status === "fulfilled") {
        const data = result.value;
        if (data.error) {
          console.error(`Error reading file ${data.file}: ${data.error}`);
        } else {
          console.log(`${data.file}:\n${data.content}\n-----`);
        }
      } else {
        console.error(`Promise rejected for unknown reason:`, result.reason);
      }
    }

  } catch (err) {
    console.error("Critical error:", err.message);
  }
}

readFiles();



