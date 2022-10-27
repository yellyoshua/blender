import {v4 as uuidv4} from 'uuid';
import {S3Client, PutObjectCommand} from '@aws-sdk/client-s3';

export default function storageService () {
  const s3 = new S3Client({
    region: process.env.AWS_SERVER_REGION,
    credentials: {
      accessKeyId: process.env.AWS_SERVER_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SERVER_SECRET_ACCESS_KEY
    }
  });

  return (user_id) => {
    return {
      async upload (file, folder) {
        const file_data = sanitize_file_data(file);
        const file_name = newFileName(file_data.name);

        const bucket_path = composePath(user_id, folder, file_name);

        const params = {
          Bucket: process.env.AWS_SERVER_BUCKET,
          Key: bucket_path,
          Body: file_data.data
        };

        const command = new PutObjectCommand(params);
        await s3.send(command);

        return getSignedUrl(bucket_path);
      }
    };
  };

  function sanitize_file_data (file) {
    const {name, size, mimetype, md5, data} = file;
    return {name, size, mimetype, md5, data};
  }

  function newFileName (name) {
    const ext = name.split('.').pop();
    const new_name = uuidv4();
    return `${new_name}.${ext}`;
  }

  function composePath (user_id, folder, fileName) {
    return `${user_id}/${folder}/${fileName}`;
  }

  function getSignedUrl (path) {
    return `https://${process.env.AWS_SERVER_BUCKET}.s3.${process.env.AWS_SERVER_REGION}.amazonaws.com/${path}`;
  }
}
