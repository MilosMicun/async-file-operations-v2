# async-file-operations-v2

## Description
This Node.js project demonstrates asynchronous file reading. It reads all files from the `files/` directory in parallel using `Promise.allSettled`, logs the content of each file, and handles errors for files that cannot be read.

## Project Structure
async-file-operations-v2/
├── files/
│ ├── file1.txt
│ ├── file2.txt
│ └── file3.txt
├── index.js
└── README.md

markdown
Copy code

- `files/` – contains sample text files to be read.
- `index.js` – main script for asynchronous file reading and error handling.
- `README.md` – project description and instructions.

## How to Run
1. Make sure Node.js is installed.
2. Navigate to the project directory:

```bash
cd async-file-operations-v2
Run the script:

bash
Copy code
node index.js
Features
Reads all files in the files/ folder in parallel.

Uses Promise.allSettled to handle successful reads and errors independently.

Logs file content for successful reads.

Logs detailed error messages for files that cannot be read.

Author
Milos Micun