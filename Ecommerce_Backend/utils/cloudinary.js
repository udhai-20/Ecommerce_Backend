const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryupload = async (filetoupload) => {
  console.log("form utile upload file", filetoupload);
  return new Promise((resolve) => {
    cloudinary.uploader.upload(filetoupload, (result) => {
      resolve(
        {
          url: result.secure_url,
          //   public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

module.exports = { cloudinaryupload };
