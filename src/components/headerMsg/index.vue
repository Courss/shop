<template>
	<div class='page'>
		<div class='wrapper' :style="{background: (menuColor? '#76c3ec':'#ffffff')}">
			<div class="image-back" >
				<img v-if="showarrow" @click="back" src="/static/arrow-left.png" class="top-back">
				<span class="title" :style="{color: (menuColor? '#ffffff':'#333333')}">{{title}}</span>
		</div>
   </div>
	</div>
</template>

<script>
	export default {
		 props: [		
		            'showarrow',
		            'title',
		            'handleback',//自己处理页面回退事件
			    'menuColor'
		],
		methods: {
			// 返回事件
			back(){
				if(this.handleback){
					this.$emit("backpress")
				}else{
					this.$router.go(-1)
				}
				
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		width: 100%;
		height: 49px;
	}
	.top-back{
		width: 20px;
		height: 22px;
		position: absolute;
		left: 10px;
		top: 12px;
	}
	.image-back{
		text-align: center;
		line-height: 45px;
	}
	.title{
	    font-size: 18px;
	}
</style>
