/* eslint-disable id-length */
import _ from 'underscore';
import {NoFileProvidedException, InvalidFileException} from '../shared/exceptions';
import storageService from '../shared/services/storage.service';
import attachToUpload from './services/attach_to_upload';
import uploadsModel from './uploads.model';

const bucket = storageService();

export default {
  async upload (body, req) {
    const user_id = req.auth_payload?.user_id || 'anonymous';
    console.log('req.auth_payload :', req.auth_payload.user_id);
    const storage = bucket(user_id);
    const {location, attached_to} = req.query;
    
    if (!req.files || _(req.files).isEmpty()) {
      throw new NoFileProvidedException();
    }

    const allowed_locations = _(uploadsModel.raw.schema.obj.location.enum).toArray();

    if (!_(allowed_locations).contains(location)) {
      throw new InvalidFileException();
    }

    const file_url = await storage.upload(req.files.file, 'profile');

    const upload = await uploadsModel.create({
      attached_to,
      location,
      url: file_url
    });

    return attachToUpload(upload);
  }
};
