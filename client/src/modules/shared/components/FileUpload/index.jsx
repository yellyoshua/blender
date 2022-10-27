import { useState, createRef } from 'react';
import services from '../../../core/services';

// When I add file inmediatly upload it to server

const allowedExtensionsByFileType = {
  image: ['jpg', 'jpeg', 'png', 'gif'],
  video: ['mp4', 'webm', 'ogg'],
  audio: ['mp3', 'wav', 'ogg']
};

export default function FileUpload ({
  location,
  attachedTo,
  fileType = 'image',
  onUpload,
  children
}) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = createRef();

  const selectFile = () => {
    fileInputRef.current.click();
  };

  const onSelected = (files) => {
    const file = files[0];
    const extension = file.name.split('.').pop();
    const allowedExtensions = allowedExtensionsByFileType[fileType];

    if (!allowedExtensions.includes(extension)) {
      // Render a toast with error message
      return;
    }

    uploadFile(file);
  };

  const uploadFile = async (file) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    const response = await services.upload.upload(formData, {
      location: location,
      attached_to: attachedTo
    });
    onUpload(response.data);
    setIsUploading(false);
  };

  return (
    <div onClick={selectFile}>
      <input
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
        disabled={isUploading}
        onChange={(event) => {
          onSelected(event.target.files);
          event.target.value = null;
        }}
      />
      {children}
    </div>
  );
}
