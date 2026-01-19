import multer from "multer";
import { Request } from "express";
import path from "path";
import fs from "fs";

const uploadFolder = path.join(__dirname, "../uploads");

// Create folder if it doesn't exist
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req: Request, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
