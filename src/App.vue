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
import ApiResponse from "./types/ApiResponse";

export default defineComponent({
	name: "App",
	components: {
		ToDoItems,
	},
	data() {
		return {
			toDoList: [] as ToDoItem[],
		};
	},
	setup() {
		const order = ref<OrderTerm>("id");
		const handleClick = (term: OrderTerm) => {
			order.value = term;
		};
		return { handleClick, order };
	},
	mounted() {
		fetch("http://api-todo-rmakowski.herokuapp.com/v1/ToDoItems", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((res) => {
				const result = res as ApiResponse<ToDoItem[]>;
				this.toDoList = result.data as ToDoItem[];
			});
	},
});
</script>
