import express from "express";
import { readFile, writeFile } from "fs/promises";
import { utils, read, write, writeFile as writeXLSXFile } from "xlsx";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
  })
);

app.get("/cursuri", async (req: any, res: any) => {
  try {
    const buffer = await readFile("./Cursuri/Cursuri.xlsx");
    const workbook = read(buffer, { type: "buffer" });
    const data = utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while reading the Excel file.");
  }
});

app.post("/cursuri", async (req: any, res: any) => {
  try {
    const newEntry = req.body;
    const buffer = await readFile("./Cursuri/Cursuri.xlsx");
    const workbook = read(buffer, { type: "buffer" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = utils.sheet_to_json(worksheet);
    data.push(newEntry);
    const newWorksheet = utils.json_to_sheet(data);
    write(workbook, { bookType: "xlsx", type: "buffer" });
    await writeXLSXFile(workbook, "./Cursuri/Cursuri.xlsx");
    res.send(newEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while writing to the Excel file.");
  }
});

app.delete("/cursuri/:id", async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const buffer = await readFile("./Cursuri/Cursuri.xlsx");
    const workbook = read(buffer, { type: "buffer" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = utils.sheet_to_json(worksheet);
    const newData = data.filter((entry: any) => entry.id !== id);
    const newWorksheet = utils.json_to_sheet(newData);
    write(workbook, { bookType: "xlsx", type: "buffer" });
    await writeXLSXFile(workbook, "./Cursuri/Cursuri.xlsx");
    res.send(id);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while writing to the Excel file.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
