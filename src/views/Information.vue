<template>
	<div class="home min-h-full container">
		<MenuHeader />
		<div class="pt-6 pb-6 mt-6 mb-6"></div>
		<div class="pt-6 pb-6 mt-6 mb-6"></div>
		<div class="m-5">
			<b-image src="/mainImg.png" ratio="1572by2110"></b-image>
		</div>
		<div class="columns m-5 pt-5">
			<div class="column is-4 p-5 text-word-wrap info-div">
				<p class="font-size-40-light-info">DAO economy</p>
				<p class="font-size-22-light-info">
					The DAO economy is estimated to have a collective value of
					approximately 9.8 billion USD as of December 3, 2022,
					according to DeepDAO.
				</p>
				<p></p>
			</div>
			<div
				class="column is-3 pt-5 pb-5 pl-2 pr-2 text-word-wrap center-start-div"
			>
				<div style="width: 100%">
					<p class="font-size-40-light">9.8 Billion</p>
					<hr class="m-0 info-hr" />
				</div>
			</div>
			<div class="column is-4 small-main-div">
				<b-image src="/smallMain.png" ratio="600by800"></b-image>
			</div>
		</div>
		<div class="columns m-5 pt-5">
			<div class="column is-4 p-5 text-word-wrap info-div">
				<p class="font-size-40-light-info">Creator economy</p>
				<p class="font-size-22-light-info">
					The Creator Economy is a new type of economy that is powered
					by digital creators who create content, products, and
					services for sale. Since 2019, the creator economy has grown
					exponentially, with total revenue for content creators more
					than doubling from $50.3 billion in 2019 to $104.2 billion.
				</p>
				<p></p>
			</div>
			<div
				class="column is-3 pt-5 pb-5 pl-2 pr-2 text-word-wrap center-start-div"
			>
				<div style="width: 100%">
					<p class="font-size-40-light">105 Billion</p>
					<hr class="m-0 info-hr" />
				</div>
			</div>
		</div>
		<div class="columns m-5 pt-5">
			<div class="column is-4 p-5 text-word-wrap info-div">
				<p class="font-size-40-light-info">SME economy</p>
				<p class="font-size-22-light-info">
					SMEs (small and medium-sized enterprises) are an essential
					driving force for economic growth and development,
					responsible for approximately 60% of global GDP. They create
					jobs, stimulate innovation, and provide goods and services
					to local communities, as well as providing a platform for
					entrepreneurs to start and grow their businesses. SMEs are
					often more flexible and agile than larger companies,
					allowing them to quickly adapt to changing market
					conditions, which can help them remain competitive and
					increase their chances of success.
				</p>
				<p></p>
			</div>
			<div
				class="column is-3 pt-5 pb-5 pl-2 pr-2 text-word-wrap center-start-div"
			>
				<div style="width: 100%">
					<p class="font-size-40-light">50 Trillion</p>
					<hr class="m-0 info-hr" />
				</div>
			</div>
		</div>
		<div class="m-5 pt-6">
			<b-image src="/map.png" ratio="1593by1053"></b-image>
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
export default class Information extends Vue {}
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

.info-hr {
	height: 5px;
}

.small-main-div {
	position: absolute;
	top: 32%;
	right: 1%;
	display: show;
	@include mobile {
		display: none;
	}
}
</style>
