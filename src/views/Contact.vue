<template>
	<div class="home min-h-full container">
		<MenuHeader />

		<div class="info-div p-5 mt-5">
			<div>
				<p class="font-size-50-contact mb-5">
					Want to expand your brand?
				</p>
			</div>
			<div class="pb-5">
				<p class="font-size-22-contact">Name</p>
				<b-field class="mt-3">
					<b-input value=""></b-input>
				</b-field>
			</div>
			<div class="pb-5">
				<p class="font-size-22-contact">Email</p>
				<b-field class="mt-3">
					<b-input value=""></b-input>
				</b-field>
			</div>
			<div class="pb-5">
				<p class="font-size-22-contact">I want to:</p>
				<b-field class="mt-3">
					<b-input value=""></b-input>
				</b-field>
			</div>
			<div class="pb-5">
				<p class="font-size-22-contact">Mobile Number / Telegram</p>
				<b-field class="mt-3">
					<b-input value=""></b-input>
				</b-field>
			</div>
			<div class="pb-5">
				<p class="font-size-22-contact">Contact</p>
				<b-field class="mt-3">
					<b-input value=""></b-input>
				</b-field>
			</div>
			<div class="pb-5">
				<p class="font-size-22-contact">Message:</p>
				<b-field class="mt-3">
					<b-input maxlength="200" type="textarea"></b-input>
				</b-field>
			</div>
			<div class="pb-5">
				<b-button expanded class="send-button">Send </b-button>
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
export default class Contact extends Vue {}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

.info-div {
	background: #ffffff;
	text-align: left;
}

.send-button {
	background: linear-gradient(180deg, #6200e9 0%, #321b68 100%);
	box-shadow: -10px 4px 20px rgba(0, 0, 0, 0.3);
	border-radius: 16px;
	color: #fff;
}
</style>
