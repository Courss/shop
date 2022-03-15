<template>
  <div>
   <navbar title="搜索" :showarrow="false" :menuColor="true"></navbar>
   <form action="#" class="search_form">
      <input type="search" name="search" class="search_input" placeholder="请输入商家或美食名称" >
      <input type="submit" name="submit" class="search_submit">
      </form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.search_form{
    background-color: #fff;
    padding: 12px 8px;
}
  input{
  height: 35px;
   padding: 0 4px;
   border-radius: 2px;
   font-weight: bold;
   outline: none;
  }
   .search_input{
    width: 79%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2;
   }
   .search_submit{
     width: 18%;
     border: 4px solid #76c3ec;
     font-size: 16px;
     color: #fff;
     background-color: #76c3ec;
   }
    
     
</style>
