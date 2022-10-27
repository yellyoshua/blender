import {S3Client, PutObjectCommand} from '@aws-sdk/client-s3';

export default function storageService () {
  const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  });

  return (user_id) => {
    return {
      async upload (file, folder, fileName) {
        const bucket_path = composePath(user_id, folder, fileName);
        const params = {
          Bucket: process.env.AWS_BUCKET,
          Key: bucket_path,
          Body: file
        };

        const command = new PutObjectCommand(params);
        await s3.send(command);

        return getSignedUrl(bucket_path);
      }
    };
  };

  function composePath (user_id, folder, fileName) {
    return `${user_id}/${folder}/${fileName}`;
  }

  function getSignedUrl (path) {
    return `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${path}`;
  }
}
