<template>
    <b-navbar class="mt-4 container">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="/logo.png"
                >
            </b-navbar-item>
        </template>

		<template #start>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<b-button type="is-ghost" class="font-size-24"
					>Marketplace</b-button
				>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<b-button type="is-ghost" class="font-size-24"
					>Information</b-button
				>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<b-button type="is-ghost" class="font-size-24"
					>Contact</b-button
				>
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<b-button type="is-ghost" class="font-size-24"
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
