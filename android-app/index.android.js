import { AppRegistry } from "react-native";
import { URL, URLSearchParams } from "url-polyfill";
import {
  Article,
  AuthorProfile,
  Section,
  Topic
} from "@times-components/pages";

// see https://github.com/facebook/react-native/issues/16434
global.URL = URL;
global.URLSearchParams = URLSearchParams;

AppRegistry.registerComponent("Article", () => Article);
AppRegistry.registerComponent("AuthorProfile", () => AuthorProfile);
AppRegistry.registerComponent("Section", () => Section);
AppRegistry.registerComponent("Topic", () => Topic);
