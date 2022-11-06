import { useState, createRef } from 'react';
import {Ping} from '@uiball/loaders';
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

  const allowedExtensions = allowedExtensionsByFileType[fileType];
  const acceptTypes = allowedExtensions.map((ext) => `${fileType}/${ext}`).join(', ');

  const selectFile = () => {
    fileInputRef.current.click();
  };

  const onSelected = (files) => {
    const file = files[0];
    const extension = file.name.split('.').pop();

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
    <div onClick={selectFile} className="relative">
      <input
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
        accept={acceptTypes}
        disabled={isUploading}
        onChange={(event) => {
          onSelected(event.target.files);
          event.target.value = null;
        }}
      />
      {isUploading && 
        <div className="absolute w-full top-0 bottom-0 left-0 right-0">
          <div className="flex items-center justify-center h-full">
            <Ping size={45} speed={1} />
          </div>
        </div>
      }
      <div className={isUploading && 'opacity-40'}>
        {children}
      </div>
    </div>
  );
}
