<template>
    <b-navbar class="mt-4">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="/logo.png"
                >
            </b-navbar-item>
        </template>

		<template #start>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<b-button type="is-ghost" class="font-size-20-light"
					>Marketplace</b-button
				>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/grage' }">
				<b-button type="is-ghost" class="font-size-20-light"
					>Information</b-button
				>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/showRoom' }">
				<b-button type="is-ghost" class="font-size-20-light"
					>Contact</b-button
				>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/leaderBoard' }">
				<b-button type="is-ghost" class="font-size-20-light"
					>Team</b-button
				>
			</b-navbar-item>

		</template>
    </b-navbar>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
	components: {
	},
})
export default class MenuHeader extends Vue {
	
}
</script>

<style scoped>
.brand {
	max-height: 100px;
	max-width: 100px;
}
.navbarCustom{
    padding-left: 0px;
    padding-right: 0px;
}
</style>
