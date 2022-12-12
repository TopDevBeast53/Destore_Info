<template>
	<div class="home min-h-full container">
		<MenuHeader />
		<div class="pt-6 pb-6 mt-6 mb-6"></div>
		<div class="info-div p-6 mt-6 mb-6">
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
					<b-select placeholder="" rounded expanded>
						<option value="Create a Web3 Store">Create a Web3 Store</option>
						<option value="Talk about a problem im having">Talk about a problem im having</option>
						<option value="Expand my brand">Expand my brand</option>
						<option value="Invest in DeStore Network">Invest in DeStore Network</option>
						<option value="Work for DeStrore Network">Work for DeStrore Network</option>
					</b-select>
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
	<!-- <div>
		<h1>
			HubSportForm
			<div id="hubspotForm" v-once></div>
		</h1>
	</div> -->
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
	mounted() {
		// const script = document.createElement('script');
		// script.src = 'https://js.hsforms.net/forms/v2.js';
		// document.body.appendChild(script);
		// script.addEventListener('load', () => {
		// 	if (window.hbspt) {
		// 		window.hbspt.forms.create({
		// 			region: "na1",
		// 			portalId: "23367504",
		// 			formId: "346af4cd-7a04-459e-831a-be30e35f45b3",
		// 			target: '#hubspotForm',
		// 		});
		// 	}
		// });
	}
}
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
