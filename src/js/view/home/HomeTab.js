import React, { Component } from "react";
import { ScrollView, RefreshControl } from "react-native";
import InformationList from "../../component/informationList";
import theme from "../../config/theme";

export default class HomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      loadedData: false,
      messages: [
        {
          tags: [1, 2],
          category: "ee",
          content: "xiaoxiaomin",
          collectionCount: "message",
          title: "xiaoxiaomin",
          user: {},
          url: "url",
          time: "2018-12-26",
          commentsCount: 10,
          viewsCount: "dfwfw",
          screenshot: {}
        },
        {
          tags: [1, 2],
          category: "ee",
          content: "xiaoxiaomin",
          collectionCount: "message",
          title: "xiaoxiaomin",
          user: {},
          url: "url",
          time: "2018-12-26",
          commentsCount: 10,
          viewsCount: "dfwfw",
          screenshot: {}
        },
        {
          tags: [1, 2],
          category: "ee",
          content: "xiaoxiaomin",
          collectionCount: "message",
          title: "xiaoxiaomin",
          user: {},
          url: "url",
          time: "2018-12-26",
          commentsCount: 10,
          viewsCount: "dfwfw",
          screenshot: {}
        },
        {
          tags: [1, 2],
          category: "ee",
          content: "xiaoxiaomin",
          collectionCount: "message",
          title: "xiaoxiaomin",
          user: {},
          url: "url",
          time: "2018-12-26",
          commentsCount: 10,
          viewsCount: "dfwfw",
          screenshot: {}
        },
        {
          tags: [1, 2],
          category: "ee",
          content: "xiaoxiaomin",
          collectionCount: "message",
          title: "xiaoxiaomin",
          user: {},
          url: "url",
          time: "2018-12-26",
          commentsCount: 10,
          viewsCount: "dfwfw",
          screenshot: {}
        },
        {
          tags: [1, 2],
          category: "ee",
          content: "xiaoxiaomin",
          collectionCount: "message",
          title: "xiaoxiaomin",
          user: {},
          url: "url",
          time: "2018-12-26",
          commentsCount: 10,
          viewsCount: "dfwfw",
          screenshot: {}
        },
        {
          tags: [1, 2],
          category: "ee",
          content: "xiaoxiaomin",
          collectionCount: "message",
          title: "xiaoxiaomin",
          user: {},
          url: "url",
          time: "2018-12-26",
          commentsCount: 10,
          viewsCount: "dfwfw",
          screenshot: {}
        },
        {
          tags: [1, 2],
          category: "ee",
          content: "xiaoxiaomin",
          collectionCount: "message",
          title: "xiaoxiaomin",
          user: {},
          url: "url",
          time: "2018-12-26",
          commentsCount: 10,
          viewsCount: "dfwfw",
          screenshot: {}
        }
      ]
    };
  }
  render() {
    return (
      <ScrollView
        style={{}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
            colors={["red", "#ffd500", "#0080ff", "#99e600"]}
            tintColor={theme.themeColor}
            title="Loading..."
            titleColor={theme.themeColor}
          />
        }
      >
        {this.items()}
      </ScrollView>
    );
  }

  items() {
    if (!this.state.refreshing || this.state.loadedData) {
      return <InformationList source={this.state.messages} />;
    }
  }

  _onRefresh() {
    this.setState({ refreshing: true });
  }
}
