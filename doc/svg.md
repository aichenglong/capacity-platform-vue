####vue-svg-icon
1 install 
```angular2html
npm install vue-svg-icon --save-dev
```
2 put your svg into src/svg/
1) this dir are not supported to be configured now
2) src folder should be in the same folder with node_modules   
 
3 import vue-svg-icon in your main.js
```angular2html
import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon', Icon)
```
4 use the svg icon in your vue!
```angular2html
<icon name="user" :scale="2"></icon>
```
