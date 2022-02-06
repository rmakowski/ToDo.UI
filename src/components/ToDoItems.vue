<template>
	<div class="todoitems">
		<h2 v-if="priority === 1">Hight priority</h2>
		<h2 v-if="priority === 2">Normal priority</h2>
		<h2 v-if="priority === 3">Low priority</h2>
		<transition-group name="list" tag="ul">
			<li v-for="toDoItem in orderedToDoItems" :key="toDoItem.id">
				<h2>{{ toDoItem.name }}</h2>
				<div class="description">
					<p>
						{{ toDoItem.description }}
					</p>
				</div>
			</li>
		</transition-group>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import ToDoItem from "@/types/ToDoItem";
import OrderTerm from "@/types/OrderTerm";

export default defineComponent({
	props: {
		toDoItems: {
			required: true,
			type: Array as PropType<ToDoItem[]>,
		},
		order: {
			required: true,
			type: String as PropType<OrderTerm>,
		},
		priority: {
			required: true,
			type: Number,
		},
	},
	setup(props) {
		let orderedToDoItems = computed(() => {
			return [
				...props.toDoItems.filter(
					(item) => item.priority === props.priority,
				),
			].sort((a: ToDoItem, b: ToDoItem) => {
				return a[props.order] > b[props.order] ? 1 : -1;
			});
		});
		return { orderedToDoItems };
	},
});
</script>

<style scoped>
.job-list {
	max-width: 960px;
	margin: 40px auto;
}

.job-list ul {
	padding: 0;
}

.job-list li {
	list-style-type: none;
	background: white;
	padding: 16px;
	margin: 16px 0;
	border-radius: 4px;
}

.job-list h2 {
	margin: 0 0 10px;
	text-transform: capitalize;
}

.salary {
	display: flex;
}

.salary img {
	width: 30px;
}

.salary p {
	color: #17bf66;
	font-weight: bold;
	margin: 10px 4px;
}

.list-move {
	transition: all 1s;
}
</style>
