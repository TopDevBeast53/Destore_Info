<template>
	<div id="app" class="min-h-full">
		<main>
			<router-view />
		</main>
		<Footer />
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
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles';

#app {
	font-family: 'Work Sans';
	text-align: center;
}
</style>
