<template>
    <div>
        <el-input placeholder="请输入内容" v-model="name">
          <el-button slot="append" icon="search"></el-button>
        </el-input>
        <el-button type="primary" >不查询直接跳过</el-button>
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
</style>
