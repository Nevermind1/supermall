<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <future-view></future-view>
     <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>

    <ul>
      <li>标签1</li>
      <li>标签2</li>
      <li>标签3</li>
      <li>标签4</li>
      <li>标签5</li>
      <li>标签6</li>
      <li>标签7</li>
      <li>标签8</li>
      <li>标签9</li>
      <li>标签10</li>
      <li>标签11</li>
      <li>标签12</li>
      <li>标签13</li>
      <li>标签14</li>
      <li>标签15</li>
      <li>标签16</li>
      <li>标签17</li>
      <li>标签18</li>
      <li>标签19</li>
      <li>标签20</li>
      <li>标签21</li>
      <li>标签22</li>
      <li>标签23</li>
      <li>标签24</li>
      <li>标签25</li>
      <li>标签26</li>
      <li>标签27</li>
      <li>标签28</li>
      <li>标签29</li>
      <li>标签30</li>
      <li>标签31</li>
      <li>标签32</li>
      <li>标签33</li>
      <li>标签34</li>
      <li>标签35</li>
      <li>标签36</li>
      <li>标签37</li>
      <li>标签38</li>
      <li>标签39</li>
      <li>标签40</li>
      <li>标签41</li>
      <li>标签42</li>
      <li>标签43</li>
      <li>标签44</li>
      <li>标签45</li>
      <li>标签46</li>
      <li>标签47</li>
      <li>标签48</li>
      <li>标签49</li>
      <li>标签50</li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FutureView from './childComps/FutureView.vue'

  import TabControl from 'components/content/tabControl/tabControl.vue'
  import NavBar from 'components/common/navbar/NavBar.vue'


  import {
    getHomeMultidata
  } from 'network/home.js'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FutureView,

      TabControl,
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style>
  #home {
    padding-top: 44px;
    /* width: 100%; */
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }

</style>
