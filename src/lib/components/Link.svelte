<script lang="ts">
	export let text: string = '';
	export let href: string = '';
</script>

<a data-track="link-{href}" {href} class="hyperlink">{text}</a>
