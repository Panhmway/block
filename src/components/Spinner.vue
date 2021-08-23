
<template>
    <div class="spin"></div>
</template>

<script>
export default {
}
</script>

<style>
    .spin{
        width: 40px;
        height: 40px;
        border:4px solid transparent;
        border-radius: 50%;
        margin:30px auto;
        border-top-color: red;
        /* border-right-color:yellow; */
        border-bottom-color: green;
        /* border-left-color:blue; */
        animation: spin 1s infinite;
    }
    @keyframes spin{
        to{transform: rotate(360deg);}
    }
</style>