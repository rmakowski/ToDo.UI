<template>
	<header>
		<h1>
			<img alt="Check mark" src="./assets/check-mark.svg" class="svg" />
			ToDo list
			<img alt="Check mark" src="./assets/check-mark.svg" class="svg" />
		</h1>
	</header>
	<div class="row">
		<div class="add-button">
			<button type="button" class="btn btn-outline-secondary btn-lg">
				Add
			</button>
		</div>
		<div class="col-sm-12 col-md-4 col-lg-4">
			<to-do-items :toDoItems="toDoList" :order="order" :priority="1" />
		</div>
		<div class="col-sm-12 col-md-4 col-lg-4">
			<to-do-items :toDoItems="toDoList" :order="order" :priority="2" />
		</div>
		<div class="col-sm-12 col-md-4 col-lg-4">
			<to-do-items :toDoItems="toDoList" :order="order" :priority="3" />
		</div>
	</div>
	<footer>Created by Radosław Makowski</footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ToDoItems from "./components/ToDoItems.vue";
import ToDoItem from "./types/ToDoItem";
import OrderTerm from "./types/OrderTerm";

export default defineComponent({
	name: "App",
	components: {
		ToDoItems,
	},
	setup() {
		const toDoList = ref<ToDoItem[]>([
			{
				id: 1,
				name: "1 item",
				description: "1 item description",
				priority: 1,
				isCompleted: true,
				createdDateUtc: "12:12:12 12/12/2012",
				updatedDateUtc: "12:12:12 12/12/2012",
			},
			{
				id: 2,
				name: "2 item",
				description: "2 item description",
				priority: 2,
				isCompleted: false,
				createdDateUtc: "12:12:12 12/12/2012",
				updatedDateUtc: "12:12:12 12/12/2012",
			},
			{
				id: 3,
				name: "3 item",
				description: null,
				priority: 2,
				isCompleted: true,
				createdDateUtc: "12:12:12 12/12/2012",
				updatedDateUtc: "12:12:12 12/12/2012",
			},
			{
				id: 4,
				name: "4 item",
				description: "4 item description",
				priority: 2,
				isCompleted: false,
				createdDateUtc: "12:12:12 12/12/2012",
				updatedDateUtc: "12:12:12 12/12/2012",
			},
			{
				id: 5,
				name: "5 item",
				description: "5 item description",
				priority: 3,
				isCompleted: false,
				createdDateUtc: "12:12:12 12/12/2012",
				updatedDateUtc: "12:12:12 12/12/2012",
			},
		]);
		const order = ref<OrderTerm>("id");
		const handleClick = (term: OrderTerm) => {
			order.value = term;
		};
		return { toDoList, handleClick, order };
	},
});
</script>
