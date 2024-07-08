<script setup>

</script>

<template>
      <div> 
        <RouterView />
      </div>
</template>
<style>

body,html{
    padding: 0;
    margin:0;
}

.flex-float{
  display: flex;
  /* 横轴布局 */
  justify-content: space-between;
  /* 纵轴布局 */
  align-items: center;
}
.flex{
  display: flex;
  align-items: center;
}
</style>
