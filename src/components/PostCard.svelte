<script>
	import { postCardWrapperClass, postCardThumbnailClass, postCardTitleClass } from '../store/styleConst'; 
    import { dafaultPostThumbnailUrl } from '../store/data';
</script>
<div class="{postCardWrapperClass}">
    <slot>
        <img src="{dafaultPostThumbnailUrl}" alt="picsum photo" class="{postCardThumbnailClass}" width="300" height="300"/>
            <div class="{postCardTitleClass}">No title</div>
    </slot>
</div>