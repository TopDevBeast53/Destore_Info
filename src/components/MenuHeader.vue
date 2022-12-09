<template>
	<b-navbar class="mt-4 container">
		<template #brand>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<img src="/logo.png" />
			</b-navbar-item>
		</template>

		<template #start>
			<b-navbar-item>
				<b-button type="is-ghost" class="font-size-24"
					><a href="https://destore.network/"
						>Marketplace</a
					></b-button
				>
			</b-navbar-item>
			<b-navbar-item>
				<b-button
					@click="Information"
					type="is-ghost"
					class="font-size-24"
				>
					Information</b-button
				>
			</b-navbar-item>
			<b-navbar-item>
				<b-button @click="Contact" type="is-ghost" class="font-size-24">
					Contact</b-button
				>
			</b-navbar-item>
			<b-navbar-item>
				<b-button @click="Team" type="is-ghost" class="font-size-24">
					Team</b-button
				>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
	components: {},
})
export default class MenuHeader extends Vue {
	Information() {
		this.$router.push({
			name: 'information',
		});
	}
	Contact() {
		this.$router.push({
			name: 'contact',
		});
	}
	Team() {
		this.$router.push({
			name: 'team',
		});
	}
}
</script>

<style scoped>

.navbarCustom {
	padding-left: 0px;
	padding-right: 0px;
}
</style>
