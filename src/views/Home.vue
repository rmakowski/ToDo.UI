<template>
	<div class="home">
		<div class="row">
			<div class="col-sm-6 col-md-6 col-lg-6">
				<button
					type="button"
					class="btn btn-outline-secondary btn-lg button"
					disabled
					style="border: none;"
				>
					Welcome {{ login }}!
				</button>
			</div>
			<div class="col-sm-6 col-md-6 col-lg-6">
				<div class="buttons">
					<button
						type="button"
						class="btn btn-outline-secondary btn-lg button"
						disabled
					>
						Add
					</button>
					<button
						type="button"
						class="btn btn-outline-secondary btn-lg button"
						@click="this.LogoutUser()"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12 col-sm-12 col-md-6 col-lg-4">
				<to-do-items
					:toDoItems="toDoList"
					:order="order"
					:priority="1"
				/>
			</div>
			<div class="col-12 col-sm-12 col-md-6 col-lg-4">
				<to-do-items
					:toDoItems="toDoList"
					:order="order"
					:priority="2"
				/>
			</div>
			<div class="col-12 col-sm-12 col-md-6 col-lg-4">
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
import { UserService } from "@/services/user.service";

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
			userService: new UserService(),
			login: localStorage.getItem("login"),
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
		await this.FetchData();
	},
	methods: {
		async FetchData(): Promise<void> {
			let loader = this.$loading.show();
			this.toDoList = await this.toDoItemsService.GetToDoItems();
			loader.hide();
		},
		LogoutUser(): void {
			let loader = this.$loading.show();
			this.userService.Logout();
			loader.hide();
			this.$router.push("/login");
		},
	},
});
</script>
