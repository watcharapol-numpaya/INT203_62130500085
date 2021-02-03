const app = {
    data() {
        return {
            firstname: 'Watcharapol',
            lastname: 'Numpaya',
            role: 'Student',
            Articles: 0,
            followes: 1000,
            rating: 9,
            img:"https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/93121372_2616629615273044_1225092296802828288_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=IS_sb85VlgEAX8KcgJo&_nc_ht=scontent.fbkk13-2.fna&oh=fc9fd8515d0135fc741ed609d1d468d0&oe=603EAA7E",
            shown : true
        }
    }
}
//Vue.createApp(app).mount('#app');
var mountedApp = Vue.createApp(app).mount('#app') 
 
