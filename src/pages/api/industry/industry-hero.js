import multer from "multer";
import path from "path";
import fs from "fs";
import dbConnect from "@/utils/db";
import Industry from "@/models/admin/Industry/Industry";
const uploadDirectory = "./public/uploads/industry/herosection";
// Ensure upload directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const apiRoute = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    upload.single("file")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: "File upload failed" });
      } else if (err) {
        console.error("Unknown error during file upload:", err);
        return res.status(500).json({ error: "File upload failed" });
      }

      const {
        title,
        description,
        contentsummary,
      } = req.body;

      // console.log("req.body ---------> ",`/uploads/industry/herosection/${req.file.filename}`);
      const fileData = req.file && {
        title,
        filename: req.file.filename,
        description,
        contentsummary,
        path:`/uploads/industry/herosection/${req.file.filename}`,
      };

      // console.log("file data that it stores in mongodb databse ---------> ",fileData)

      try {
        const updatedFile = await Industry.create(fileData);
        return res.status(200).json({ data: updatedFile });
      } catch (error) {
        // console.error("Error updating or saving file:", error);
        return res.status(500).json({ message: "Internal Server Error 1",error });
      }
    });
  } else if (req.method === "GET") {
    try {
      const files = await Industry.find({});
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error("Error fetching files:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
   else {
    res.setHeader("Allow", ["POST", "GET", "DELETE"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
