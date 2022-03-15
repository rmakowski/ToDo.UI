<template>
	<div class="home">
		<div class="row" v-if="loading">Loading</div>
		<div class="row" v-else>
			<div class="buttons">
				<button
					type="button"
					class="btn btn-outline-secondary btn-lg button"
				>
					Add
				</button>
				<button
					type="button"
					class="btn btn-outline-secondary btn-lg button"
					@click="this.resetData()"
				>
					Default data
				</button>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-4">
				<to-do-items
					:toDoItems="toDoList"
					:order="order"
					:priority="1"
				/>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-4">
				<to-do-items
					:toDoItems="toDoList"
					:order="order"
					:priority="2"
				/>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-4">
				<to-do-items
					:toDoItems="toDoList"
					:order="order"
					:priority="3"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ToDoItems from "@/components/ToDoItems.vue";
import ToDoItem from "@/types/ToDoItem";
import OrderTerm from "@/types/OrderTerm";
import { ToDoItemsService } from "@/services/toDoItems.service";

export default defineComponent({
	name: "Home",
	components: {
		ToDoItems,
	},
	data() {
		return {
			toDoList: [] as ToDoItem[],
			loading: true as boolean,
			toDoItemsService: new ToDoItemsService()
		};
	},
	setup() {
		const order = ref<OrderTerm>("id");
		const handleClick = (term: OrderTerm) => {
			order.value = term;
		};
		return { handleClick, order };
	},
	async mounted() {
		await this.fetchData();
	},
	methods: {
		async fetchData(): Promise<void> {
			this.loading = true;
			this.toDoList = await this.toDoItemsService.GetToDoItems();
			this.loading = false;
		},
		async resetData(): Promise<void> {
			this.loading = true;
			await this.toDoItemsService.ResetToDoItems();
			this.loading = false;
			await this.fetchData();
		},
	},
});
</script>
