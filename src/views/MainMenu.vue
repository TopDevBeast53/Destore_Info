<template>
	<div class="home main-menu min-h-full container">
		<MenuHeader />
		<div class="columns is-mobile is-centered">
			<div class="center-start-div">
				<!-- <b-button
					class="font-size-44 pt-2 pb-2 pl-4 pr-4 has-text-centered center-start-button"
					tag="router-link"
					:to="{ path: '/' }"
				>
					START
				</b-button> -->
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import MenuHeader from '@/components/MenuHeader.vue'; // @ is an alias to /src

@Component({
	components: {
		MenuHeader,
	},
})
export default class MainMenu extends Vue {

}
</script>

<style lang="scss">
// .main-menu {
// 	padding: 0px;
// 	background: linear-gradient(
// 		180deg,
// 		#000000 0%,
// 		rgba(0, 0, 0, 0) 15.8%,
// 		rgba(0, 0, 0, 0) 56.52%,
// 		#000000 73.27%,
// 		#000000 94.88%
// 	);
// 	background: url('../../public/home.jpg') !important;
// 	background-position: center center !important;
// 	background-repeat: no-repeat !important;
// 	background-size: cover !important;
// }

// .center-start-div {
// 	position: absolute;
// 	top: 65%;
// 	left: 50%;
// 	-moz-transform: translateX(-50%) translateY(-50%);
// 	-webkit-transform: translateX(-50%) translateY(-50%);
// 	transform: translateX(-50%) translateY(-50%);
// }
// .center-start-button {
// 	background: rgba(0, 0, 0, 0.2);
// 	border: 2px solid #ff00e5;
// 	border-radius: 12px;
// }
</style>
