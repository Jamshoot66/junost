import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { FacebookProvider, Like } from "react-facebook";
import { JUNOST_FACEBOOK_ID, JUNOST_FACEBOOK_URL } from "utils/constants";

function FacebookLike(): React.ReactElement {
  return (
    <FacebookProvider appId={JUNOST_FACEBOOK_ID}>
      <Like
        href={JUNOST_FACEBOOK_URL}
        colorScheme="dark"
        showFaces
        layout="button_count"
        size="small"
      />
    </FacebookProvider>
  );
}

export default FacebookLike;
