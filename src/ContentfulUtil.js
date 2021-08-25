import * as contentful from "contentful";

class ContentfulUtil {
  static client = contentful.createClient({
    space: "y9a5csjycgp0",
    accessToken: "ph9IJ9nYUWT9i7_LrfFXv0Nn_mMNzDwPjCMnbRbmz5w",
  });
}

export default ContentfulUtil;
