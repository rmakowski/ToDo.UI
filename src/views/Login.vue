<template>
	<div class="login" style="text-align: center; margin-top: 4em">
		<div class="row justify-content-md-center">
			<form class="col-6" v-on:keyup.enter="this.LoginUser()">
				<h2>Please login to your account</h2>
				<br />
				<div class="form-outline mb-4">
					<input
						type="text"
						id="login"
						class="form-control"
						placeholder="Login"
						v-model="login"
						autocomplete="on"
					/>
				</div>
				<div class="form-outline mb-4">
					<input
						type="password"
						id="password"
						class="form-control"
						placeholder="Password"
						v-model="password"
						autocomplete="on"
					/>
				</div>
				<div class="text-center pt-1 mb-5 pb-1">
					<button
						class="btn btn-outline-primary btn-block fa-lg"
						type="button"
						@click="this.LoginUser()"
					>
						Log in
					</button>
					&nbsp;
					<button
						class="btn btn-outline-secondary btn-block fa-lg"
						type="button"
						@click="this.LoginAsDemoUser()"
					>
						Demo log in
					</button>
					&nbsp;
					<button
						type="button"
						class="btn btn-outline-danger"
						@click="this.$router.push('/register')"
					>
						Register
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserService } from "@/services/user.service";
import LoginUserRequest from "@/services/requests/LoginUserRequest";

export default defineComponent({
	name: "Login",
	components: {
	},
	data() {
		return {
			login: "",
			password: "",
			userService: new UserService()
		};
	},
	mounted() {
		this.userService.Logout();
	},
	methods: {
		async LoginUser(): Promise<void> {
			let loader = this.$loading.show();
			await this.userService.LoginUser({
				login: this.login,
				password: this.password
			} as LoginUserRequest);
			loader.hide();
			this.$router.push('/')
		},
		async LoginAsDemoUser(): Promise<void> {
			let loader = this.$loading.show();
			await this.userService.LoginAsDemoUser();
			loader.hide();
			this.$router.push('/')
		},
	},
});
</script>
