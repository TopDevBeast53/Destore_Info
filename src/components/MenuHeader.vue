<template>
	<b-navbar class="mt-4 container">
		<template #brand>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<img src="/logo.png" />
			</b-navbar-item>
		</template>

		<template #start>
			<b-navbar-item>
				<b-button class="font-size-24"  type="is-ghost"
					><a href="https://destore.network/" class="navbar-head-color"
						>Marketplace</a
					></b-button
				>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<b-button class="font-size-24 navbar-head-color" type="is-ghost"> Information</b-button>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/contact' }">
				<b-button class="font-size-24 navbar-head-color" type="is-ghost"> Contact</b-button>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/team' }">
				<b-button class="font-size-24 navbar-head-color" type="is-ghost"> Team</b-button>
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
.navbar-head-color{
	color: #321B68 !important;
}
</style>
