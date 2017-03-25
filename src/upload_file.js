let AWS = require('aws-sdk');
let fs = require('fs');

AWS.config.loadFromPath('./data/config.json'); // AWS S3 creds.

function upload_file(path_to_pdf, lession_id) {
    console.log("path: " + path_to_pdf);
    s3 = new AWS.S3({apiVersion: '2006-03-01'});  // Create S3 service object
    let uploadParams = {Bucket: BUCKET_NAME, Key: '', Body: ''};
    let filestream = fs.readFileSync(relative_file_path);
    uploadParams.Body = filestream;

    // Note: uploadParams.key = "my-new-path/file.etx" will create the folder my-new-path.
    uploadParams.Key = lesson_id +'/' + path.basename(relative_file_path);  // Returns filename.ext from path/to/file/filename.ext.

    // call S3 to retrieve upload file to specified bucket
    s3.upload (uploadParams, function (err, data) {
      if (err) {
        console.log("Error", err);
      }
      if (data) {
        console.log("Upload Full PDF Success", data.Location);
      }
    });
}