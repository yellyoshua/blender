import file_upload from 'express-fileupload';

export default function filesMiddleware () {
  return file_upload();
}
