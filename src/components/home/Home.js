
import React, { Children } from "react"
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
  ScrollView
} from "react-native"
import { StyleSheet, Dimensions, StatusBar } from "react-native"
import { Sizes } from "@dungdang/react-native-basic"
import {
  arrayIsEmpty,
  objectIsNull,
} from "@dungdang/react-native-basic/src/Functions"
import Images from "../../res/images";
import { isPhone, screen } from '../../config/settings'
import Swiper from '../custom/Swiper'
import SwiperImages from '../custom/SwiperImages'
import FastImage from 'react-native-fast-image'
import OrderShippingComponent from '../order/OrderShipping'
import IconMenu from "./IconMenu";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      indexSlide: 0
    }
    this.slideImage = React.createRef()
  }
  onChangeSlide(listLength) {
    let indexSlide = this.state.indexSlide
    if (indexSlide < listLength) {
      indexSlide = parseInt(indexSlide) + 1
    } else {
      indexSlide = 0
    }
    this.setState({ indexSlide: indexSlide }, () => {
      this.slideImage.current.scrollToIndex(this.state.indexSlide)
    })
  }
  render() {
    const listImage = [{
      url: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg"
    },
    {
      url: "https://i.pinimg.com/236x/5d/b0/55/5db05527613c8e6fa76d88abb1b02c66.jpg"
    },
    {
      url: "https://i.pinimg.com/236x/59/ee/34/59ee347f8c614775178b99cd44a1c01e.jpg"
    },
    {
      url: "https://i.pinimg.com/236x/db/09/f0/db09f09594b1f6cf431f51573dd7689f.jpg"
    },
    {
      url: "https://i.pinimg.com/236x/63/e3/72/63e372af804049f16527fcb1f2e55f50.jpg"
    },]
    const listType = [
      {
        imgUrl: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        imgUri: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUrl: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        imgUri: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUrl: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        imgUri: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUrl: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        imgUri: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUrl: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        imgUri: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUrl: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        imgUri: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUri: "https://i.pinimg.com/236x/5d/b0/55/5db05527613c8e6fa76d88abb1b02c66.jpg",
        imgUrl: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUrl: Images.ic_luggage,
        imgUri: "",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUrl: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        imgUri: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg",
        iconTitle: "Ahihi",
        screenNavigate: "",
      },
      {
        imgUrl: Images.ic_more,
        imgUri: "",
        iconTitle: "Xem thêm",
        screenNavigate: "",
      },
    ]
    setTimeout(() => { this.onChangeSlide(listImage.length) }, 3000)
    // return (
    //   <OrderShippingComponent></OrderShippingComponent>
    // )
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={styles.searchBar}>
          <View
            style={{
              backgroundColor: "#F2F2F2",
              flexDirection: "row",
              alignItems: "center",
              height: Sizes.s90,
              width: "85%",
              borderRadius: Sizes.s10,
            }}
          >
            <TextInput
              placeholder="   Tìm kiếm sản phẩm"
              placeholderTextColor="#ABAAAC"
              style={{
                fontSize: Sizes.s30,
                paddingVertical: Sizes.s10,
                height: Sizes.s100,
                marginLeft: Sizes.s10,
                width: "85%",
                color: "#000000",
              }}
              onChangeText={(text) => {
                // this.setState(
                // 	{
                // 		warningList: [],
                // 		page: 1,
                // 		limit: 10,
                // 		searchText: text,
                // 	},
                // 	() => {
                // 		this.loadData();
                // 	}
                // );
              }
              }
            />
            <Image
              source={Images.ic_search}
              style={{
                height: Sizes.s40,
                width: Sizes.s40,
                // marginHorizontal: Sizes.s20,
              }}
            />
          </View>
        </View>
        <View style={styles.header}>
          <Swiper ref={this.slideImage}>
            {
              listImage.map(item =>
                <View style={styles.slide}>
                  <Image
                    defaultSource={require('../../res/images/ic_default.jpg')}
                    resizeMode='contain'
                    source={{ uri: item.url }}
                    style={{
                      width: Dimensions.get('window').width,
                      height: Dimensions.get('window').height,
                    }}
                  />
                </View>
              )
            }
          </Swiper>
          {/* <SwiperImages
            listImage={listImage}
            indexSlide={this.state.indexSlide} /> */}
        </View>
        {/* productType */}
        <HomeScrollItem
          listType={listType}
          itemTitle={"Giảm giá đặc biệt"}
        />
           <HomeScrollItem
          listType={listType}
          itemTitle={"Giảm giá đặc biệt"}
        />
           <HomeScrollItem
          listType={listType}
          itemTitle={"Giảm giá đặc biệt"}
        />
      </ScrollView>
    );
  }
}
export class HomeScrollItem extends React.Component {
  render() {
    const { listType, itemTitle } = this.props
    return (
      <View styles={{ flex: 1 }}>
        <View style={stylesItem.ViewItemTitle}>
          <Text style={{ fontSize: Sizes.s45, marginLeft: Sizes.s20}}>{itemTitle}</Text>
          <TouchableOpacity
            style={stylesItem.seeMore}
            onPress={() => {
              // this.props.navigation.navigate("");
            }}
            underlayColor="rgb(255, 255, 255)"
          >
            <Text style={stylesItem.seeMoreText}>Xem Thêm</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.content} showsHorizontalScrollIndicator={false} horizontal={true} number={2}>
          {listType.map((iconData) => (
            <IconMenu
              {...this.props}
              style={{ marginLeft: 0 }}
              imgUrl={iconData.imgUrl}
              imgUri={iconData.imgUri}
              title={iconData.iconTitle}
              screenNavigate={iconData.screenNavigate}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    // width: "100%",
    height: isPhone ? Sizes.s340 * 1.2 : Sizes.s340,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red"
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: "row",
    borderRadius: Sizes.s10,
    // marginLeft: Sizes.s20,
    // marginRight: Sizes.s30,
    position: 'absolute',
    zIndex: 5,
    marginTop: Sizes.s120,
    width: "100%",
    height: Sizes.s100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    // flex: 1,
    width: "165%",
    height: screen.width * 0.7,
    // height: isPhone ? Sizes.s340 * 1.3 : Sizes.s340 + Sizes.s120,
    // marginTop: Sizes.s30,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "flex-start",
  },
})
const stylesItem = StyleSheet.create({
  ViewItemTitle: {
    width: "100%",
    height: Sizes.s75,
    marginTop: Sizes.s45,
    backgroundColor: "white",
    // alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  seeMore: {
    height: screen.width * 0.7,
    marginRight: Sizes.s20,
    marginLeft: Sizes.s160,
    // backgroundColor:"red"
  },
  seeMoreText: {
    marginTop: Sizes.s10,
    fontSize: Sizes.s35,
    color: "blue",
    flexWrap: "wrap",
  },
})