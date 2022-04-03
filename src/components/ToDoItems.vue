<template>
	<div class="todoitems">
		<h2 v-if="priority === 1">Hight priority</h2>
		<h2 v-if="priority === 2">Normal priority</h2>
		<h2 v-if="priority === 3">Low priority</h2>
		<hr />
		<transition-group name="list">
			<div v-if="orderedToDoItems.length == 0">Everything is done</div>
			<div v-for="toDoItem in orderedToDoItems" :key="toDoItem.id" v-else>
				<div class="row" style="margin: 16px 0">
					<div class="col-2 col-sm-2 col-md-2 col-lg-2">
						<img
							alt="Check mark"
							src="@/assets/check-mark.svg"
							class="svg"
							v-if="toDoItem.isCompleted"
						/>
						<img
							alt="Check mark"
							src="@/assets/uncheck-mark.svg"
							class="svg"
							v-if="!toDoItem.isCompleted"
						/>
					</div>
					<div class="col-10 col-sm-10 col-md-7 col-lg-7">
						{{ toDoItem.name }}
					</div>
					<div class="col-12 col-sm-12 col-md-3 col-lg-3">
						<button
							type="button"
							class="btn btn-outline-secondary btn-sm"
							disabled
						>
							Edit
						</button>
					</div>
				</div>
			</div>
		</transition-group>
		<hr />
		<transition-group name="list">
			<div v-if="orderedDoneToDoItems.length == 0">Nothing is done</div>
			<div
				v-for="toDoItem in orderedDoneToDoItems"
				:key="toDoItem.id"
				v-else
			>
				<div class="row" style="margin: 16px 0">
					<div class="col-2 col-sm-2 col-md-2 col-lg-2">
						<img
							alt="Check mark"
							src="@/assets/check-mark.svg"
							class="svg"
							v-if="toDoItem.isCompleted"
						/>
						<img
							alt="Check mark"
							src="@/assets/uncheck-mark.svg"
							class="svg"
							v-if="!toDoItem.isCompleted"
						/>
					</div>
					<div class="col-10 col-sm-10 col-md-7 col-lg-7">
						{{ toDoItem.name }}
					</div>
					<div class="col-12 col-sm-12 col-md-3 col-lg-3">
						<button
							type="button"
							class="btn btn-outline-secondary btn-sm"
							disabled
						>
							Edit
						</button>
					</div>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import OrderTerm from "@/types/OrderTerm";
import GetToDoItemsResponse from "@/services/responses/GetToDoItemsResponse";

export default defineComponent({
	name: "ToDoItems",
	props: {
		toDoItems: {
			required: true,
			type: Array as PropType<GetToDoItemsResponse[]>,
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
					(item) =>
						item.priority === props.priority && !item.isCompleted,
				),
			].sort((a: GetToDoItemsResponse, b: GetToDoItemsResponse) => {
				return a[props.order] > b[props.order] ? 1 : -1;
			});
		});
		let orderedDoneToDoItems = computed(() => {
			return [
				...props.toDoItems.filter(
					(item) =>
						item.priority === props.priority && item.isCompleted,
				),
			].sort((a: GetToDoItemsResponse, b: GetToDoItemsResponse) => {
				return a[props.order] > b[props.order] ? 1 : -1;
			});
		});
		return { orderedToDoItems, orderedDoneToDoItems };
	},
});
</script>

<style scoped>
.list {
	max-width: 960px;
	margin: 40px auto;
}

.list-move {
	transition: all 1s;
}
</style>
