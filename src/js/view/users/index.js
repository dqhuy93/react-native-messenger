import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  PixelRatio,
  ScrollView,
  TouchableOpacity
} from "react-native";
import SearchBar from "../../component/searchBar";
import TextButton from "../../component/textButton";
import theme from "../../config/theme";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";
import Ionicons from "react-native-vector-icons/FontAwesome";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      iconList: [
        {
          name: "扫描代码",
          value: "!",
          key: "Notice",
          icon: { key: "instagram", color: "white", bgc: "rgb(146,146,146)" }
        },
        {
          name: "邀请",
          value: "开启",
          key: "OnlineStatus",
          icon: { key: "home", color: "white", bgc: "rgb(114,215,105)" }
        },
        {
          name: "请求",
          value: "m.me/tykdn",
          key: "Account",
          icon: { key: "at", color: "white", bgc: "rgb(238,76,66)" }
        },
        {
          name: "添加",
          value: "添加手机号",
          key: "PhoneNumber",
          icon: { key: "slack", color: "white", bgc: "rgb(87,94,207)" }
        }
      ],
      itmeList:[
          {
            key:'phone',
            text:'上传通讯录'
          },
          {
            key:'instagram',
            text:'关注 Instagram'
          },
          {
            key:'database',
            text:'全部用户'
          }
      ]
    };
    this.rendlist = this.rendlist.bind(this);
  }
  rendlist() {
    return (
      <View style={{ marginBottom: 40 }}>
        {this.state.itmeList.map((item, index) => (
          <Item key={index} name={item.key} text={item.text} />
        ))}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center", borderBottomColor: "#dbdbdb",
            borderBottomWidth: 1 }}>
          <View
            style={{
              height: px2dp(100),
              width: "80%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this.state.iconList.map((item, index) => (
              <IconItem
                key={index}
                goto={item.key}
                value={item.value}
                name={item.name}
                icon={item.icon}
              />
            ))}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>{[this.rendlist()]}</ScrollView>
        </View>
      </View>
    );
  }
}

class Item extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
  };
  go() {}
  render() {
    const { name ,text} = this.props;
    px2dp(40);
    return (
      <View style={styles.item}>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={this.go.bind(this, "My")}>
              <Ionicons name={name} size={px2dp(25)} color={'rgb(24, 110, 232)'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: px2dp(49),
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc"
          }}
        >
          <Text
            style={{
              fontSize: theme.actionBar.fontSize,
              color: "#000",
              marginLeft: px2dp(15)
            }}
          >
            {text}
          </Text>
          <Ionicons
              name={"chevron-right"}
              size={20}
              style={{ color: "#ccc", marginRight: 10 }}
          />
        </View>
      </View>
    );
  }
}
class IconItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    value: PropTypes.string,
    goto: PropTypes.string
  };
  render() {
    const { goto, name, value, icon } = this.props;
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
          marginLeft: px2dp(20),
          marginRight: px2dp(20)
        }}
      >
        <View style={{ ...styles.icon }}>
          <Ionicons name={icon.key} size={px2dp(25)} color={icon.color} />
        </View>
        <Text
          style={{
            fontSize: 14,
            color: "rgb(24, 110, 232)",
              paddingTop: 10,
              paddingBottom: 10
          }}
        >
          {name}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  searchBar: {
    height: 55,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5
  },
  text: {
    paddingLeft: px2dp(20)
  },
  avatar: {
    height: px2dp(40),
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: px2dp(50),
    height: px2dp(50),
    borderTopRightRadius: px2dp(25),
    borderBottomEndRadius: px2dp(25),
    borderBottomLeftRadius: px2dp(25),
    borderTopLeftRadius: px2dp(25),
    justifyContent: "center",
    backgroundColor: "rgb(55,131,247)",
    alignItems: "center"
  },
  item: {
    flexDirection: "row",
    height: px2dp(49),
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20)
    // borderBottomColor: "#ccc",
    // borderBottomWidth: 1 / PixelRatio.get()
  }
});