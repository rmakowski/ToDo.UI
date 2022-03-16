<template>
	<div class="home">
		<div class="row">
			<div class="buttons">
				<button
					type="button"
					class="btn btn-outline-secondary btn-lg button"
				>
					Add
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
import OrderTerm from "@/types/OrderTerm";
import { ToDoItemsService } from "@/services/toDoItems.service";
import GetToDoItemsResponse from "@/services/responses/GetToDoItemsResponse";

export default defineComponent({
	name: "Home",
	components: {
		ToDoItems,
	},
	data() {
		return {
			toDoList: [] as GetToDoItemsResponse[],
			loading: true as boolean,
			toDoItemsService: new ToDoItemsService(),
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
			let loader = this.$loading.show();
			this.toDoList = await this.toDoItemsService.GetToDoItems();
			loader.hide();
		},
	},
});
</script>
