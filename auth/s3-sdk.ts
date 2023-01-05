// Create a function to store images and videos on Amazon S3
function storeMediaOnS3(fileName: string, fileType: string): void {
  // Initialize the Amazon S3 client
  const s3 = new AWS.S3();

  // Set the bucket name and file path
  const bucketName = "my-bucket";
  const filePath = `${fileName}.${fileType}`;

  // Read the file from disk
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    // Configure the upload parameters
    const params = {
      Bucket: bucketName,
      Key: filePath,
      Body: data,
    };

    // Upload the file to S3
    s3.upload(params, (err, data) => {
      if (err) throw err;

      console.log(`File uploaded successfully at ${data.Location}`);
    });
  });
}
