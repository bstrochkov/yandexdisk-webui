

/**
 * Init Google API
 *
 * @param options
 * @returns {Promise<{apiInitialized: boolean, apiSignedIn: boolean}>}
 */
async function init(options) {
  await appendGoogleApiScript();
  await loadAuth2Library();
  console.log('Try auth on Google Drive API');
  return await initClient(options); // Initializes API client library.
}

export default {
  init,
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
};
