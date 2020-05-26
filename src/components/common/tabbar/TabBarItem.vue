<template>
	<div class="tab-bar-item" @click="itemBtn">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="new_color"><slot name="item-text"></slot></div>
	</div>
</template>
<script>
	export default{
		name:'TabBarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return{
				// isActive: true,
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !==-1
			},
			new_color(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			itemBtn(){
				this.$router.replace(this.path)
			}
		}
	}
</script>
<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tab-bar-item img{
    /* width: 15px; */
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}

  /* .tab-bar-item img {
    width: 1.024rem;
    height: 1.024rem;
    margin-top: 0.126rem;
    vertical-align: middle;
  } */

</style>
