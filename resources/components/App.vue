<template>
<div>
    <div>
        this is vue component
        <div>
            <button type="button" class="btn btn-danger">Danger</button>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        1
                        <router-link class="nav-link active" :to="{ name: 'test1' }">test1</router-link>
<!--                        <router-link class="nav-link active" :to="{ name: 'home' }">home</router-link>-->
                    </li>
                    <li class="nav-item">
                        2
                        <router-link class="nav-link active" :to="{ name: 'test2' }">test2</router-link>
<!--                        <router-link class="nav-link active" :to="{ name: 'about' }">about</router-link>-->
                    </li>
                    <li class="nav-item">
                        3
<!--                        <router-link class="nav-link active" :to="{ name: 'hotel.index' }">hotel</router-link>-->
                    </li>
                    <li class="nav-item">
                        4
<!--                        <router-link class="nav-link active" :to="{ name: 'hotel.store' }">create hotel</router-link>-->
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
