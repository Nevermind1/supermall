<template>
	<tab-bar>
		<tab-bar-item path='/home' activeColor="blue">
			<img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path='/fenlei' activeColor="blue">
			<img slot="item-icon" src="~assets/img/tabbar/fenlei.png" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/fenlei_active.png" alt="">
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path='shopping' activeColor="blue">
			<img slot="item-icon" src="~assets/img/tabbar/shopping.png" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/shopping_active.png" alt="">
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path='profile' activeColor="blue">
			<img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
