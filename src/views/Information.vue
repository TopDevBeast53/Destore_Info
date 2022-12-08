<template>
	<div class="home min-h-full container">
		<div class="columns is-mobile is-centered">
					<div class="columns pt-6 mt-6">
						<img src="/mainImg.png" />
					</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

export default class Information extends Vue {

}
</script>

<style lang="scss">
.collection-image {
	background: url('../../public/mainImg.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	// border: 4px solid #ffffff;
	// box-sizing: border-box;
	// border-radius: 20px;
	width: 100%;
	height: 700px;
	display: flex;
}
</style>
