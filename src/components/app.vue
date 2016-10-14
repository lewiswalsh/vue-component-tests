
  <template>
    <div v-on:roger='callRoger'>
      <div class="message">{{ msg }}</div>
      <p>{{ sausages }}</p>
      <button type='button' v-on:click='mitzvah'>Shalom</button>
      <plum v-on:roger='callRoger' v-on:stan='callStan'></plum>
    </div>
  </template>

  <script>
    // import $ from '../lib/jquery-3.1.1.min.js';

    import Plum from './plum.vue';

    export default {
      data(){
        return {
          msg : 'Hello from vue-loader!',
          sausages : 'Sausalito'
        }
      },
      components : {
        Plum
      },
      created(){
        console.log('All done');
      },
      methods : {
        mitzvah(){
          console.log('Mazel Tov!');
          $.ajax({
            method : "GET",
            url    : "https://jsonplaceholder.typicode.com/posts/1"
          }).done(function(msg){
            console.log(msg);
          });
        },
        callRoger(){
          //this.$broadcast(e);
          console.log('Roger!');
        },
        callStan(steve){
          //this.$broadcast(e);
          console.log(steve);
        }
      }
      // ,
      // events: {
      //   'roger' : 'callRoger'
      // }
    }


  </script>

  <style>
    .message {
      color : blue;
    }
  </style>
