
  <template>
    <div>
      <div class="wigwam">{{ toshi }}</div>
      <p>{{ barry }}</p>
      <button type='button' v-on:click='snot'>Hayley</button>
    </div>
  </template>

  <script>
    export default {
      data(){
        return {
          toshi : 'Hello from the other component!',
          barry : 'Mighty throat'
        }
      },
      created(){
        console.log('Yup. All finished.');
      },
      methods : {
        snot(){
          // this.$dispatch('roger', 'smith');
          this.$emit('roger'); //, 'smith'
          this.$emit('stan', 'Buttscratcher?'); //, 'smith'
          console.log(this.$root.state);
          console.log('Jeff!');
        }
      }
    }
  </script>

  <style>
    .wigwam {
      color : red;
    }
  </style>
