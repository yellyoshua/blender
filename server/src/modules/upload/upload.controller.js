export default {
  upload (req, res) {
    const {file} = req;
    if (!file) {
      return res.status(400).json({
        message: 'No file uploaded'
      });
    }
    return res.json({
      message: 'File uploaded successfully',
      file
    });
  }
};
