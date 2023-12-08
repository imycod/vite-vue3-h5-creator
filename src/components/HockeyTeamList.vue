<template>
    <ul class="divide-y divide-gray-200">
        <hockey-team-list-item 
            v-for="team in teams" 
            :key="team.id" 
            :team="team">
        </hockey-team-list-item>
    </ul>
</template>
  
<script setup lang="ts">
import HockeyTeamListItem from "./HockeyTeamListItem.vue"
defineProps({
    teams: {
        type: Array
    }
})
</script>