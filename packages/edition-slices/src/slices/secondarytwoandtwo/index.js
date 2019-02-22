import React from "react";
import PropTypes from "prop-types";
import { SecondaryTwoAndTwoSlice } from "@times-components/slice-layout";
import { TileC, TileG, TileV } from "../../tiles";
import { ResponsiveSlice } from "../shared";

const SecondaryTwoAndTwo = ({
  onPress,
  slice: { secondary1, secondary2, support1, support2 }
}) => (
  <ResponsiveSlice
    renderMedium={breakpoint => (
      <SecondaryTwoAndTwoSlice
        breakpoint={breakpoint}
        renderSecondary1={() => (
          <TileV onPress={onPress} tile={secondary1} tileName="secondary1" />
        )}
        renderSecondary2={() => (
          <TileV onPress={onPress} tile={secondary2} tileName="secondary2" />
        )}
        renderSupport1={() => (
          <TileG onPress={onPress} tile={support1} tileName="support1" />
        )}
        renderSupport2={() => (
          <TileG onPress={onPress} tile={support2} tileName="support2" />
        )}
      />
    )}
    renderSmall={breakpoint => (
      <SecondaryTwoAndTwoSlice
        breakpoint={breakpoint}
        renderSecondary1={() => (
          <TileC onPress={onPress} tile={secondary1} tileName="secondary1" />
        )}
        renderSecondary2={() => (
          <TileC onPress={onPress} tile={secondary2} tileName="secondary2" />
        )}
        renderSupport1={() => (
          <TileG onPress={onPress} tile={support1} tileName="support1" />
        )}
        renderSupport2={() => (
          <TileG onPress={onPress} tile={support2} tileName="support2" />
        )}
      />
    )}
  />
);

SecondaryTwoAndTwo.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({
    secondary1: PropTypes.shape({}).isRequired,
    secondary2: PropTypes.shape({}).isRequired,
    support1: PropTypes.shape({}).isRequired,
    support2: PropTypes.shape({}).isRequired
  }).isRequired
};

export default SecondaryTwoAndTwo;