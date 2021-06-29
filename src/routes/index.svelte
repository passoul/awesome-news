<script context="module">
	import { getCatsList } from '../actions/action';

	export function preload() {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			// Get all categories from posts
			return { cats: getCatsList(posts) };
		});
	}
</script>
<script>
	import { LOADING_TEXT } from '../store/const'; 
	import PostCard from '../components/PostCard.svelte'
	import { newGridClass, postCardThumbnailClass, postCardCatTitleClass, postCardChildClass, postCardThumbnailHoverClass } from '../store/styleConst'; 
	export let cats;
	
</script>
<svelte:head>
	<title>News Categories</title>
</svelte:head>

{#await cats}
	<p>{LOADING_TEXT}</p>
{:then cats}
	<div class="{newGridClass}">
		{#each cats as {title, thumbnailUrl, nbItems} (title)}
		<PostCard>
			<a rel='prefetch' href='{title}' class="{postCardChildClass}">
				<div class="overflow-hidden"><img src="{thumbnailUrl}" alt="{title} thumbnail" class="{postCardThumbnailClass} {postCardThumbnailHoverClass}" width="300" height="300"></div>
				<div class="{postCardCatTitleClass}">{title} ({nbItems})</div>
			</a>
		</PostCard>
		{/each}
	</div>
{/await}