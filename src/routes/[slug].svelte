<script context="module">
    import { getCatPostsList } from '../actions/action'
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`index.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { posts: getCatPostsList(data, params.slug) };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { LOADING_TEXT, POST_CARD_BTN_TEXT } from '../store/const';
	import PostCard from '../components/PostCard.svelte'
	import { newGridClass, postCardThumbnailClass, postCardTitleClass, postCardCatViewsWrapperClass, postCardCreatedbtnWrapperClass, postCardDetailsClass, postCardbtnClass, postCardCatTitleClass, postCardChildClass } from '../store/styleConst'; 
	import { faRss, faEye, faCalendar } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from 'fontawesome-svelte';

	export let posts;

    // Format date
    const formatDate = (date) => {
        let dateobj = new Date(date);
        let formatted = dateobj.toLocaleDateString('en-GB');
        return formatted;
    }

</script>

{#await posts}
	<p>{LOADING_TEXT}</p>
{:then posts}
    {#if posts.message}
        <h1 class="title-channel">{posts.message}</h1>
    {:else}
        <div class="{newGridClass}">
            {#each posts as {id, title, thumbnailUrl, nbItems, createdAt, views, category} (id)}
            <PostCard>
                <div class="{postCardChildClass}">
                    <img src="{thumbnailUrl}" alt="{title} thumbnail" class="{postCardThumbnailClass}" width="300" height="300">
                    <div class="{postCardTitleClass}">{title}</div>
                </div>
                <div class="{postCardChildClass}">
                    <div class="{postCardDetailsClass} {postCardCatViewsWrapperClass}">
                        <div clas="{postCardCatTitleClass}">
                            <FontAwesomeIcon icon={faRss} />
                            {category}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEye} />
                            {views}
                        </div>
                    </div>
                    <div class="{postCardDetailsClass} {postCardCreatedbtnWrapperClass}">
                        <div>
                            <FontAwesomeIcon icon={faCalendar} />
                            {formatDate(createdAt)}
                        </div>
                        <div>
                            <a rel='prefetch' href='{id}' class="{postCardbtnClass}">
                                {POST_CARD_BTN_TEXT}
                            </a>
                        </div>
                    </div>
                </div>
            </PostCard>
            {/each}
        </div>
    {/if}
{/await}