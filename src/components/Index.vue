<template>
    <div class="search">
        <div>
          <el-button type="primary" >查询角色</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
        name:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.search{
  background:url('lol.jpg')no-repeat;
  background-size: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
