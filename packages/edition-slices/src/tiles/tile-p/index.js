import React, { Component } from "react";
import { Dimensions, View } from "react-native";
import PropTypes from "prop-types";
import {
  getCrop,
  TileImage,
  TileLink,
  TileSummary,
  withTileTracking
} from "../shared";
import styles from "./styles";

class TileP extends Component {
  state = {
    containerWidth: Dimensions.get("window").width
  };

  render() {
    const { onPress, tile, breakpoint } = this.props;
    const { containerWidth } = this.state;
    return (
      <TileLink onPress={onPress} tile={tile}>
        <View
          onLayout={event =>
            this.setState({ containerWidth: event.nativeEvent.layout.width })
          }
          style={styles.container}
        >
          <TileImage
            aspectRatio={1}
            borderRadius={containerWidth * 0.15}
            style={styles.imageContainer}
            uri={getCrop(tile.article.leadAsset, "crop11")}
          />
          <TileSummary
            byline={tile.article.byline}
            bylineStyle={styles.bylineOpinion}
            headlineStyle={styles.headline(breakpoint)}
            strapline={tile.strapline}
            straplineStyle={styles.strapline}
            style={styles.summaryContainer}
            tile={tile}
          />
        </View>
      </TileLink>
    );
  }
}

TileP.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired
};

export default withTileTracking(TileP);
