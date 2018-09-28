import React from "react";
import { NativeModules } from "react-native";
import { ArticleWithNativeProvider } from "@times-components/pages";
import adConfig from "../ad-config";
import articlePropTypes from "../article-prop-types";

const config = NativeModules.ReactConfig;
const { dispose, fetch } = NativeModules.NativeArticleProvider;
const { track } = NativeModules.ReactAnalytics;
const {
  onArticlePress,
  onArticleLoaded,
  onAuthorPress,
  onCommentsPress,
  onCommentGuidelinesPress,
  onLinkPress,
  onTopicPress,
  onVideoPress
} = NativeModules.ArticleEvents;

const ArticleView = ({
  adTestMode,
  articleId,
  omitErrors,
  scale,
  sectionName
}) => {
  const platformAdConfig = {
    ...adConfig(config),
    sectionName,
    testMode: adTestMode
  };

  return (
    <ArticleWithNativeProvider
      articleId={articleId}
      analyticsStream={event => {
        if (event.object === "Article" && event.action === "Viewed") {
          onArticleLoaded(event.attrs.articleId, event);
        } else {
          track(event);
        }
      }}
      dispose={dispose}
      fetch={fetch}
      omitErrors={omitErrors}
      onArticlePress={onArticlePress}
      onAuthorPress={onAuthorPress}
      onCommentsPress={onCommentsPress}
      onCommentGuidelinesPress={onCommentGuidelinesPress}
      onLinkPress={onLinkPress}
      onVideoPress={onVideoPress}
      onTopicPress={onTopicPress}
      platformAdConfig={platformAdConfig}
      scale={scale}
      sectionName={sectionName}
    />
  );
};

ArticleView.propTypes = articlePropTypes;

export default ArticleView;
