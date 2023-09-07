<script>
    export let img;
</script>

<div class="containerX">
    <div class="box box-1">
        <!-- <h2 class="name">Rajisimas</h2> -->
        <div class="circle" />
        <img class="product w-60" src={img} alt=""/>
    </div>
</div>

<style>
	.containerX .box {
		position: relative;
		width: 300px;
		height: 400px;
		/* margin: 40px; */
		background: #5a5a5a;
		border-radius: 20px;
		/* transform-style: preserve-3d; */
	}
	
	.containerX .box:hover::before,
	.containerX .box:hover::after {
		opacity: 0.9;
	}
	/* .container .box .name {
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		color: #fff;
		width: 100%;
		transform-style: preserve-3d;
		transform: translate3d(0, 0, 75px);
		transition: 0.5s;
		opacity: 0;
		z-index: 10;
	}
	.container .box:hover .name {
		top: 40px;
		opacity: 1;
	} */
	.containerX .box .circle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		/* background: red; */
		transform-style: preserve-3d;
		z-index: 10;
		opacity: 1;
		transform: translate3d(-50%, -50%, 25px);
	}
	.containerX .box .product {
		position: absolute;
		top: 50%;
		left: 53%;
		transition: 0.5s;
		z-index: 11;
		transition: 0.5s;
		transform-style: preserve-3d;
		transform: translate3d(-50%, -50%, 50px) rotate(20deg);
	}
	.containerX .box-1::before {
		content: 'RAJÍSIMAS';
		position: absolute;
		top: 20px;
		left: 20px;
		font-size: 3em;
		font-weight: 900;
		color: #ffffff;
		font-style: italic;
		opacity: 0;
		transition: 0.5s;
	}
	.containerX .box-1::after {
		content: '460 gr, 235 gr, ';
		position: absolute;
		bottom: 20px;
		left: 20px;
		font-size: 1.5em;
		font-weight: 900;
		color: #fff;
		font-style: italic;
		opacity: 0;
		transition: 0.5s;
	}
	.containerX .box:nth-child(1) .circle {
		background: #d9dc28;
	}
</style>