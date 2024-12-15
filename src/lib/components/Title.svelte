<script>
	export let title = 'Hello World!';
	export let subtitle = 'This is a subtitle';
	export let description = 'This is a description';
</script>

<div>
	<h3 class="semibold">{subtitle}</h3>
	<h1 class="semibold">{title}</h1>
	<p class="regular">{description}</p>
</div>

<style>
	div {
		text-align: left;
		flex-shrink: 0;
	}

	h1 {
		font-size: 36px;
		margin: 0;
		margin-bottom: 80px;
		padding: 0;
	}

	h3 {
		font-size: 23px;
		margin: 0;
		margin-bottom: 3px;
		padding: 0;
		color: #d2d2d2;
	}

	p {
		font-size: 18px;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 768px) {
		div {
			margin-top: 70px;
			width: 100vw;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		h1 {
			text-align: center;
			font-weight: 700;
			font-size: 28px;
			margin-bottom: 20px;
		}

		h3 {
			text-align: center;
			font-size: 14px;
		}

		p {
			width: 230px;
			text-align: center !important;
			font-size: 14px;
		}
	}
</style>
