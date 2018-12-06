/* eslint-disable consistent-return */

import React, { Component, Fragment } from "react";
import { View } from "react-native";
import ArticleError from "@times-components/article-error";
import ArticleSkeleton from "@times-components/article-skeleton";
import { getHeadline, getLeadAsset } from "@times-components/utils";
import ArticleHeader from "./article-header/article-header";
import LeadAsset from "./article-lead-asset/article-lead-asset";
import {
  articlePropTypes,
  articleDefaultProps
} from "./article-prop-types/article-prop-types";
import Meta from "./article-meta/article-meta";
import styles from "./styles";


class ArticleMagazineInDepth extends Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader({ width }) {
    const { article, onAuthorPress, onVideoPress } = this.props;
    const {
      byline,
      flags,
      headline,
      label,
      publicationName,
      publishedTime,
      shortHeadline,
      standfirst
    } = article;
    const { leadAsset } = getLeadAsset(article);

    return (
      <Fragment>
        <ArticleHeader
          byline={byline}
          flags={flags}
          headline={getHeadline(headline, shortHeadline)}
          label={label}
          onAuthorPress={onAuthorPress}
          publicationName={publicationName}
          publishedTime={publishedTime}
          standfirst={standfirst}
        />
        <LeadAsset data={{ ...leadAsset, onVideoPress }} width={width} />
        <View style={styles.metaContainer}>
          <Meta
            byline={byline}
            publicationName={publicationName}
            publishedTime={publishedTime}
          />
        </View>
      </Fragment>
    );
  }

  render() {
    const { error, refetch, isLoading } = this.props;

    if (error) {
      return <ArticleError refetch={refetch} />;
    }

    if (isLoading) {
      return null;
    }

    const {
      adConfig,
      analyticsStream,
      article,
      onAuthorPress,
      onCommentGuidelinesPress,
      onCommentsPress,
      onLinkPress,
      onRelatedArticlePress,
      onTopicPress,
      onTwitterLinkPress,
      onVideoPress,
      onViewed,
      receiveChildList
    } = this.props;

    return (
      <ArticleSkeleton
        adConfig={adConfig}
        analyticsStream={analyticsStream}
        data={article}
        Header={this.renderHeader}
        onAuthorPress={onAuthorPress}
        onCommentGuidelinesPress={onCommentGuidelinesPress}
        onCommentsPress={onCommentsPress}
        onLinkPress={onLinkPress}
        onRelatedArticlePress={onRelatedArticlePress}
        onTopicPress={onTopicPress}
        onTwitterLinkPress={onTwitterLinkPress}
        onVideoPress={onVideoPress}
        onViewableItemsChanged={onViewed ? this.onViewableItemsChanged : null}
        receiveChildList={receiveChildList}
      />
    );
  }
}

ArticleMagazineInDepth.propTypes = articlePropTypes;
ArticleMagazineInDepth.defaultProps = articleDefaultProps;

export default ArticleMagazineInDepth;