new Vue({
    el: '#app',
    data: {
        title: 'The vue instance'
    },
    beforeCreate: function() {
        console.log('beforeCreate()');
    },
    beforeMount: function() {
        console.log('beforeMount()');
    },
    mounted: function() {
        console.log('mounted()');
    },
    // Before updating DOM (changes in Virtual DOM)
    beforeUpdate: function() {
        console.log('beforeUpdate()');
    },
    // Changes in DOM made
    updated: function() {
        console.log('updated()');
    },
    beforeDestroyed: function() {
        console.log('beforeDestroyed()');
    },
    destroyed: function() {
        console.log('destroyed()');
    },
    methods: {
        destroy: function() {
            this.$destroy();
        }
    }
});