<script>
	import { navLinks } from '../store/data';
	import { NAV_LINKS_EMPTY } from '../store/const';
	import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from 'fontawesome-svelte';
	import { navBarClass, navBarContentWrapperClass, navBarLinkClass, navLinksUlClass } from '../store/styleConst'

	export let segment;
</script>

<style>
	[aria-current] {
		@apply relative;
	}

	[aria-current]::after {
		@apply absolute h-0.5 block bg-purple-500 -bottom-px;
		content: '';
		width: calc(100% - 1rem);
	}
</style>

<nav class="{navBarClass}">
	<div class="{navBarContentWrapperClass}">
		<a href="/" class="{navBarLinkClass}">
			<FontAwesomeIcon icon={faNewspaper} />
			<span class="ml-2">Awesome News</span>
		</a>
		{#if navLinks.length > 0}
		<ul class={navLinksUlClass}>
			{#each navLinks as { href, label } (href)}
				<li><a href="{ href }" aria-current="{segment === href ? 'page' : undefined}" class="{navBarLinkClass}">{ label }</a></li>
			{/each}
			<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
		</ul>
		{:else}
			<p class="py-4">{ NAV_LINKS_EMPTY }</p>
		{/if}
	</div>
</nav>
