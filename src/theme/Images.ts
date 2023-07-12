import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/tom_light.png'),
    sparkles: {
      topLeft: require('./assets/images/sparkles-top-left.png'),
      top: require('./assets/images/sparkles-top.png'),
      topRight: require('./assets/images/sparkles-top-right.png'),
      right: require('./assets/images/sparkles-right.png'),
      bottomRight: require('./assets/images/sparkles-bottom-right.png'),
      bottom: require('./assets/images/sparkles-bottom.png'),
      bottomLeft: require('./assets/images/sparkles-bottom-left.png'),
    },
    icons: {
      colors: require('./assets/images/colorswatch.png'),
      send: require('./assets/images/send.png'),
      translate: require('./assets/images/translate.png'),
    },
    tab: {
      heart: require('./assets/images/heart.png'),
      home: require('./assets/images/home.png'),
      shopping: require('./assets/images/shopping.png'),
      list: require('./assets/images/list.png'),
      user: require('./assets/images/user.png'),
    },
    home: {
      search: require('./assets/images/search.png'),
      notification: require('./assets/images/bell.png'),
      back: require('./assets/images/back.png'),
    },
  };
}
