<template>
	<div class="home min-h-full container">
		<MenuHeader />

		<div class="columns m-5 pt-5">
			<div class="column is-5 info-div p-5">
				<p class="font-size-40-light-info">James</p>
				<p class="font-size-22-light-info text-word-wrap">
					kjhgefhwgbefjhwgbjhwbdgccjhlwgbjhlweqsdvcfcqdvcqedvcvefvrdqdfvqdvfedfvedfrverfvdsfevqvfeqrfvevfedfvevervfervfervevfqrvfqdfvcedfvberytjt4eyghbwdfgtyukj5yujhrfgtbdwfbvwdfgbhgf
				</p>
			</div>
			<div class="column is-2"></div>
			<div class="column is-5 info-div p-5">
				<p class="font-size-40-light-info">James</p>
				<p class="font-size-22-light-info text-word-wrap">
					kjhgefhwgbefjhwgbjhwbdgccjhlwgbjhlweqsdvcfcqdvcqedvcvefvrdqdfvqdvfedfvedfrverfvdsfevqvfeqrfvevfedfvevervfervfervevfqrvfqdfvcedfvberytjt4eyghbwdfgtyukj5yujhrfgtbdwfbvwdfgbhgf
				</p>
			</div>
		</div>

		<div class="columns m-5 pt-5">
			<div class="column is-5 info-div p-5">
				<p class="font-size-40-light-info">Josiah</p>
				<p class="font-size-22-light-info text-word-wrap">
					kjhgefhwgbefjhwgbjhwbdgccjhlwgbjhlweqsdvcfcqdvcqedvcvefvrdqdfvqdvfedfvedfrverfvdsfevqvfeqrfvevfedfvevervfervfervevfqrvfqdfvcedfvberytjt4eyghbwdfgtyukj5yujhrfgtbdwfbvwdfgbhgf
				</p>
			</div>
			<div class="column is-2"></div>
			<div class="column is-5 info-div p-5">
				<p class="font-size-40-light-info">Josiah</p>
				<p class="font-size-22-light-info text-word-wrap">
					kjhgefhwgbefjhwgbjhwbdgccjhlwgbjhlweqsdvcfcqdvcqedvcvefvrdqdfvqdvfedfvedfrverfvdsfevqvfeqrfvevfedfvevervfervfervevfqrvfqdfvcedfvberytjt4eyghbwdfgtyukj5yujhrfgtbdwfbvwdfgbhgf
				</p>
			</div>
		</div>

		<div class="columns m-5 pt-5">
			<div class="column is-5 info-div p-5">
				<p class="font-size-40-light-info">Pili</p>
				<p class="font-size-22-light-info text-word-wrap">
					kjhgefhwgbefjhwgbjhwbdgccjhlwgbjhlweqsdvcfcqdvcqedvcvefvrdqdfvqdvfedfvedfrverfvdsfevqvfeqrfvevfedfvevervfervfervevfqrvfqdfvcedfvberytjt4eyghbwdfgtyukj5yujhrfgtbdwfbvwdfgbhgf
				</p>
			</div>
			<div class="column is-2"></div>
			<div class="column is-5 info-div p-5">
				<p class="font-size-40-light-info">Pili</p>
				<p class="font-size-22-light-info text-word-wrap">
					kjhgefhwgbefjhwgbjhwbdgccjhlwgbjhlweqsdvcfcqdvcqedvcvefvrdqdfvqdvfedfvedfrverfvdsfevqvfeqrfvevfedfvevervfervfervevfqrvfqdfvcedfvberytjt4eyghbwdfgtyukj5yujhrfgtbdwfbvwdfgbhgf
				</p>
			</div>
		</div>

		<div class="columns m-5 pt-5">
			<div class="column is-5 info-div p-5">
				<p class="font-size-40-light-info">Levi Kotzur</p>
				<p class="font-size-22-light-info text-word-wrap">
					kjhgefhwgbefjhwgbjhwbdgccjhlwgbjhlweqsdvcfcqdvcqedvcvefvrdqdfvqdvfedfvedfrverfvdsfevqvfeqrfvevfedfvevervfervfervevfqrvfqdfvcedfvberytjt4eyghbwdfgtyukj5yujhrfgtbdwfbvwdfgbhgf
				</p>
			</div>
			<div class="column is-2"></div>
			<div class="column is-5 info-div p-5">
				<p class="font-size-40-light-info">Levi Kotzur</p>
				<p class="font-size-22-light-info text-word-wrap">
					kjhgefhwgbefjhwgbjhwbdgccjhlwgbjhlweqsdvcfcqdvcqedvcvefvrdqdfvqdvfedfvedfrverfvdsfevqvfeqrfvevfedfvevervfervfervevfqrvfqdfvcedfvberytjt4eyghbwdfgtyukj5yujhrfgtbdwfbvwdfgbhgf
				</p>
			</div>
		</div>

		<div>
			<p class="font-size-100 pt-5 partner-text">Partners</p>
			<hr style="background-color: rgb(121, 121, 121); height: 4px" />
		</div>

		<div class="columns mt-5">
			<div class="column is-5">
				<b-image src="/aem.png" ratio="590by200"></b-image>
			</div>
			<div class="column is-2">
			</div>
			<div class="column is-5">
				<b-image src="/metaDjo.png" ratio="620by200"></b-image>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import MenuHeader from '@/components/MenuHeader.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src

@Component({
	components: {
		MenuHeader,
		Footer,
	},
})
export default class Team extends Vue {}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

.info-div {
	background: #ffffff;
	text-align: left;
}

.center-start-div {
	display: flex;
	align-items: center;
	justify-content: center;
}
.partner-text {
	font-family: 'Inter';
}
</style>
