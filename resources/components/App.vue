<template>
<div class="p-3">

    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'index.hotel' }">index Hotel</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'main' }">main page</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'store.hotel' }">store hotel</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <router-view></router-view>
    </main>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>
