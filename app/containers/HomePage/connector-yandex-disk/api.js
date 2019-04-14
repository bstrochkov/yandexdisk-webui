
import YandexDiskSdk from './YandexDiskSdk';

class YandexDiskApi {

  init({ token }) {
      this._sdk = new YandexDiskSdk({
          token
      });
      return {
          apiInitialized: true,
          apiSignedIn: this.hasSignedIn(),
      };
  }

  async hasSignedIn() {
    const res = await this._sdk.diskInfo();
    console.log(res);
    return false;
  }

  getResourceById() {
      return {
          createdDate: 123,
          id: 13,
          modifiedDate: 213,
          title: 'title',
          type: 'dir',
          size: 987,
          parents: [],
          capabilities: [],
          downloadUrl: 'download-url',
          mimeType: 'text/css',
          exportLinks: []
      };
  }

  getChildrenForId() {
      return [];
  }

  getParentsForId() {
      return [];
  }

  getResourceName() {
      return 'Hello';
  }

}

export default new YandexDiskApi();



// async function init(options) {
//   await appendGoogleApiScript();
//   await loadAuth2Library();
//   console.log('Try auth on Google Drive API');
//   return await initClient(options); // Initializes API client library.
// }

// export default {
//   init,
  // hasSignedIn,
  // getResourceById,
  // getChildrenForId,
  // getRootId,
  // getParentsForId,
  // getParentIdForResource,
  // getCapabilitiesForResource,
  // getResourceName,
  // createFolder,
  // downloadResource,
  // downloadResources,
  // uploadFileToId,
  // renameResource,
  // removeResources,
  // signIn,
  // signOut
// };
