<script>
	import { navLinks } from '../store/store';
	import { NAV_LINKS_EMPTY } from '../store/const';
	import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from 'fontawesome-svelte';

	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<div>
		<a href="/">
			<FontAwesomeIcon icon={faNewspaper} />
			<div>Awesome News</div>
		</a>
	</div>
	{#if $navLinks.length > 0}	
	<ul>
		{#each $navLinks as { href, label }, i}
			<li><a href="{ href }" aria-current="{segment === href ? 'page' : undefined}">{ label }</a></li>
		{/each}
	</ul>
	{:else}
		<p class="py-4">{ NAV_LINKS_EMPTY }</p>
	{/if}
</nav>
