const app = Vue.createApp({
   // DATA
   data() {
      return {
         input: null,
         result: null
      };
   },

   // METHODS
   methods: {
      findMaxFive: function() {
         let arr = JSON.parse("[" + this.input + "]");
         // Sort arr from highest to lowest number
         arr.sort((a,b) => {
            return b - a;
         });
         // push 5 highest numbers into new array
         let newArr = [];
         for(let i=0; i<5; i++) {
            newArr.push(arr[i]);
         }
         // print out the new array 
         this.result = newArr;
      },

      clearInput: function() {
         this.input = null;
         this.result = null;
      }

   },

   // COMPUTED
   computed: {},
}).mount("#app");
