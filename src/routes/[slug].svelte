<script context="module">
	export async function preload({ params, query }) {
        console.log("🚀 ~ file: [slug].svelte ~ line 3 ~ preload ~ params", params)
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`index.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
    console.log("🚀 ~ file: [slug].svelte ~ line 18 ~ post", post)
</script>