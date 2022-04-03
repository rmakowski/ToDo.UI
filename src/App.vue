<template>
	<div class="container-fluid">
		<custom-header />
		<router-view />
		<custom-footer />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomFooter from "@/components/CustomFooter.vue";
import CustomHeader from "@/components/CustomHeader.vue";

export default defineComponent({
	name: "App",
	components: {
		CustomFooter,
		CustomHeader
	}
});
</script>
