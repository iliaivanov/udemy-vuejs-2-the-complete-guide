let data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

// Registring component.
Vue.component('hello', {
  template: '<h1>Hello</h1>'
});

let vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      // Accessing elements by reference.
      console.log(this.$refs);
      this.$refs.myButtonRef.innerText = 'Hohoho';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// Mount Vue app to element manually. For instance if I don't want to do it right away or don't know ehre to mount.
vm1.$mount('#app-1');

// Access Vue instance from regular JS.
setTimeout(() => {
  vm1.title = 'Changed by timer!';
  // Does the same.
  vm1.$data.title = 'Changed by timer!';
  vm1.show();
}, 300000);

// True. We can initialize data in variable and use it to define data in Vue app.
console.log(vm1.$data === data);


// This new prop woudln't be added to the vm1 Vue instance itself because it's not reactive. Vue proxies the data, methods and stuff outside but not other way.
vm1.newProp = '123';

// Access refs outside of Vue app.
// vm1.$refs.heading.innerText = 'Something else';

let vm2 = new Vue({
  el: '#app-2',
  data: {
    title: 'Second Instance'
  },
  methods: {
    onChange: function() {
      // Access one Vue instance from another.
      vm1.title = 'Changed!';
    }
  }
});

let vm3 = new Vue({
  // Will only mount to first matched element.
  // el: 'hello',
  el: '.hello',
  template: '<h1>Hola from template!</h1>'
});

// vm3.$mount('#app-3');
// or the same
// vm3.$mount();
// document.getElementById('app-3').appendChild(vm3.$el);