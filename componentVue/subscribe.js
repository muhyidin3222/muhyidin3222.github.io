Vue.component('componentsubscribe', {
    props: ['color'],
    template: `
    <section class="subscribe_part section_padding" v-bind:style="{ backgroundColor: color}">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="subscribe_part_content">
                        <h2>Get promotions & updates!</h2>
                        <p>Seamlessly empower fully researched growth strategies and interoperable internal or
                            “organic”
                            sources credibly innovate granular internal .</p>
                        <div class="subscribe_form">
                            <input type="email" placeholder="Enter your mail">
                            <a href="#" class="btn_1">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    // data: function() {
    //    return {
    //       name : "Ria"
    //    }
    // },
    // methods:{
    //    changename : function() {
    //       this.name = "Ben";
    //    },
    //    originalname: function() {
    //       this.name = "Ria";
    //    }
    // }
});
new Vue({
    el: '#component_subscribe'
});