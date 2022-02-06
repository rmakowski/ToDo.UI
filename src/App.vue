<template>
	<main-header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "./components/MainHeader.vue";

export default defineComponent({
	name: "App",
	components: {
		MainHeader
	},
});
</script>
