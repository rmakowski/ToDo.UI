<template>
	<div class="pagenotfound" style="text-align: center; margin-top: 4em">
		<h1>404 PAGE NOT FOUND</h1>
		<br />
		<p>Sorry, but the page which you are looking for do not exist.</p>
		<br />
		<button
			type="button"
			class="btn btn-outline-secondary btn-lg button"
			@click="this.$router.push('/')"
		>
			Home
		</button>
	</div>
</template>
