import * as contentful from "contentful";

const client = contentful.createClient({
  spcae: process.env.LECOACH_SPACE_ID,
  accessToken: process.env.LECOACH_ACCESS_TOKEN,
});
