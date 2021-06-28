<script context="module">
	export function preload() {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>
<script>
	import { getCatsList } from '../actions/action';
	import { LOADING_TEXT } from '../store/const'; 
	import PostCard from '../components/PostCard.svelte'
	import { newGridClass, postCardThumbnailClass, postCardTitleClass } from '../store/styleConst'; 
	export let posts;
	// Get all categories from posts
	const cats = getCatsList(posts);

    console.log("🚀 ~ file: index.svelte ~ line 13 ~ cats", cats)
	
</script>
<svelte:head>
	<title>News Categories</title>
</svelte:head>

{#await cats}
	<p>{LOADING_TEXT}</p>
{:then cats}
	<div class="{newGridClass}">
		{#each cats as cat (cat)}
		<PostCard>
			<a rel='prefetch' href='{cat.title}'>
				<img src="{cat.thumbnailUrl}" alt="{cat.title} thumbnail" class="{postCardThumbnailClass}" width="300" height="300">
				<div class="{postCardTitleClass}">{cat.title} ({cat.nbItems})</div>
			</a>
		</PostCard>
		{/each}
	</div>
{/await}