<script setup lang="ts">
const route = useRoute();

console.log(route.params);
</script>
<template>
	<div>
		<h1>event id:{{ $route.params.id }}</h1>
	</div>
</template>
<style scoped></style>
