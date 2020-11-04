import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui css
import 'element-ui/lib/theme-chalk/index.css'
//局部引入element - ui 组件
import {
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Row,
    Col,
    Card,
    Link,
    Input,
    Button,
    Divider,
    Carousel,
    CarouselItem,
    Rate,
    Popover
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Link)
Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Rate)
Vue.use(Popover)
//引入element-ui组件默认大小
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
