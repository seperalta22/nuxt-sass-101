<script lang="ts" setup>
const { sayHello } = useUtils()
sayHello()
</script>

<template>
	<div class="container">
		<Alert />
		<Profile />
	</div>
</template>

<style scoped></style>
