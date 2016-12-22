<template>
  <div id="app">
  	<write></write>
	  <read></read>
  </div>
</template>

<script>
  import write from '../components/write'
  import read from '../components/read'
  export default {
    components: {
      write,
      read
    }
  }
</script>
