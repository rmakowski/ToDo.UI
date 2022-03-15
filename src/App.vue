<template>
	<header>
		<h1>
			<img alt="Check mark" src="./assets/check-mark.svg" class="svg" />
			ToDo list
			<img alt="Check mark" src="./assets/check-mark.svg" class="svg" />
		</h1>
	</header>
	<router-view />
	<footer>Created by eDevCode Radosław Makowski</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
});
</script>
