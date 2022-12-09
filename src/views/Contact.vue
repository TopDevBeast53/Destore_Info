<template>
	<div class="home min-h-full container">
		<MenuHeader />

		<div class="info-div">
			<div>
				<p class="font-size-50-contact">Want to expand your brand?</p>
			</div>
			<div>
				<p class="font-size-22-contact">
					Name
				</p>
				<!-- <b-field label="mint.expert.batchSend">
					<b-input
						type="textarea"
						placeholder="Distribute nfts to multiple addresses"
						spellcheck="true"
					></b-input>
				</b-field> -->
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
export default class Contact extends Vue {
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

.info-div {
	background: #ffffff;
	text-align: left;
}
</style>
