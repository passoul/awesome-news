<script>
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from "../components/GlobalStyle.svelte";
	import { posts } from '../store/store';

	export let segment;

	// Define class const
	const mainClass = 'container py-8';
</script>

<Nav {segment}/>
<main class="{mainClass}">
	<GlobalStyle />
	<slot></slot>
</main>