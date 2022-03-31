<template>
	<div class="container-fluid">
		<header>
			<h1>
				<img
					alt="Check mark"
					src="./assets/check-mark.svg"
					class="svg"
				/>
				ToDo list
			</h1>
		</header>
		<router-view />
		<footer>©{{ year }} eDevCode Radosław Makowski</footer>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	data() {
		return {
			year: 2022,
		};
	},
});
</script>
