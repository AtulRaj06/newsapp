const AWS = require("aws-sdk");
const uuid = require("uuid");
const { AWS_CONFIG } = require("../config/constants.config");

const uploadFileToS3 = (file, fileName) => {
  const splittedName = fileName.split(".");
  const extension = splittedName[splittedName.length - 1];
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: uuid.v4() + "." + extension,
    Body: file,
  };

  const s3Bucket = new AWS.S3(AWS_CONFIG);
  return s3Bucket.upload(params).promise();
};

const deleteFileFromS3 = (fileKey) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: fileKey,
  };

  const s3Bucket = new AWS.S3(AWS_CONFIG);
  return s3Bucket.deleteObject(params).promise();
};

module.exports = {
  uploadFileToS3,
  deleteFileFromS3,
};
