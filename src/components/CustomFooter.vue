<template>
	<footer>©{{ new Date().getFullYear() }} eDevCode Radosław Makowski</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "CustomFooter",
});
</script>
