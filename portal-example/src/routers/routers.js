//3. routers/routers.js 파일 생성
import Vue from 'vue';
import VueRouter from 'vue-router';
// Vue + router
Vue.use(VueRouter);

//절대경로에서 @는 src 밑을 의미함
import NavBar from "@/components/NavBarPage.vue";
import Blog from "@/components/BlogPage.vue";
import Cafe from "@/components/CafePage.vue";
import Mail from "@/components/MailPage.vue";
import TellMe from "@/components/TellMePage.vue";
import Footer from "@/components/FooterPage.vue";

export default new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                NavBar : NavBar,
                default: Cafe,
                Footer: Footer
            }
        },
        {
            path: '/blog',
            components: {
                NavBar : NavBar,
                default: Blog,
                Footer: Footer
            }
        },
        {
            path: '/cafe',
            components: {
                NavBar : NavBar,
                default: Cafe,
                Footer: Footer
            }
        },
        {
            name: 'Mail',
            path: '/mail',
            components: {
                NavBar : NavBar,
                default: Mail,
                Footer: Footer
            }
        },
        {
            path: '/tellMe',
            components: {
                NavBar : NavBar,
                default: TellMe,
                Footer: Footer
            }
        }
    ]
});