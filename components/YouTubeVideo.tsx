import React from "react";
import WebView from "react-native-webview";

const YouTubeVideo = ({ videoId }) => {
  return (
    <WebView
      className="rounded-xl"
      javaScriptEnabled={true}
      source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
    />
  );
};

export default YouTubeVideo;
