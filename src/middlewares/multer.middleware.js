import multer from 'multer';
import path from 'path';

// Configure storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Initialize multer with storage configuration
export const upload = multer({ storage: storage });
