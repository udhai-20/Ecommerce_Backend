const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    const uniequeSuffix = Date.now() + "-" + Math.round(Math.random() * 9);
    cb(null, file.fieldname + "-" + uniequeSuffix + ".jpeg");
  },
});
const multerFileFilter = (req, file, cb) => {
  //   console.log(file.mimetype.startsWith("image"));
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Only images are allowed!",
        statusCode: 400,
      },
      false
    );
  }
};
const uploadPhotos = multer({
  storage: multerStorage,
  fileFilter: multerFileFilter,
  limits: { fieldNameSize: 2000000 },
});

const productImageResize = async (req, res, next) => {
  console.log("   req:", req.files);
  if (!req) return next();

  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/products/${file.filename}`);
      fs.unlinkSync(`public/images/products/${file.filename}`);
    })
  );
  next();
};

const blogImageResize = async (req, res, next) => {
  if (!req) return next();

  await Promise.all(
    req.files.map(async (file, i) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename}`);
      fs.unlinkSync(`public/images/blogs/${file.filename}`);
    })
  );
  next();
};

module.exports = { uploadPhotos, blogImageResize, productImageResize };
