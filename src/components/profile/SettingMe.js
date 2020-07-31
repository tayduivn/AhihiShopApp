import React from "react";
import { useTranslation } from "react-i18next";

import { StyleSheet } from "react-native";
import { Text, ListItem } from "../../components";

import { grey4 } from "../../components/config/colors";
import { icon, titleProps } from "./config";
import { margin, padding } from "../../components/config/spacing";

const SettingMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text medium style={styles.title}>
        {t("profile:text_title_setting")}
      </Text>
      <ListItem
        leftIcon={icon(0)}
        title={t("common:text_setting")}
        type="underline"
        titleProps={titleProps}
        pad={padding.large}
        chevron
        // onPress={() => clickPage(profileStack.setting)}
      />
      <ListItem
        leftIcon={icon(1)}
        title={t("common:text_help_info")}
        type="underline"
        titleProps={titleProps}
        chevron
        pad={padding.large}
        // onPress={() => clickPage(profileStack.help)}
      />
      <ListItem
        leftIcon={icon(2)}
        title={t("profile:text_hotline")}
        rightElement={
          <Text colorThird style={styles.phone}>
            {phonenumber}
          </Text>
        }
        type="underline"
        titleProps={titleProps}
        pad={padding.large}
        containerStyle={!isLogin && styles.itemEnd}
        // onPress={() => goPhone(`tel:${phonenumber}`)}
      />
      {isLogin && (
        <ListItem
          leftIcon={icon(3)}
          title={t("profile:text_signout")}
          type="underline"
          titleProps={titleProps}
          pad={padding.large}
          containerStyle={styles.itemEnd}
          //   onPress={handleSignOut}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: grey4,
    marginTop: margin.big + 4,
    marginBottom: margin.small,
  },
  phone: {
    marginHorizontal: margin.small / 2,
  },
  itemEnd: {
    borderBottomWidth: 0,
  },
});

SettingMe.defaultProps = {
  isLogin: true,
  phonenumber: "",
  goPhone: () => {},
};
export default SettingMe;
