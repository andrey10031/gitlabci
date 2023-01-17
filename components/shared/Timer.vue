<template>
    <span >
        {{time}}
    </span>
</template>

<script lang="ts" setup>

interface Props {
  active: boolean;
}

const props = defineProps<Props>();

const time = ref('0:00')

const timer = onMounted(() => {
    let currentSec = 0;
    
        setInterval(() => {
            let seconds = Math.floor(currentSec % 60)
            let minutes = Math.floor((currentSec / 60) % 60)
            if(props.active) {
                time.value = `${minutes <= 0 ? '0' : minutes}:${seconds <= 0 ? '00' : seconds < 10? "0"+seconds: seconds}`
                 currentSec+= 1
            }else{
                seconds = 0;
                minutes = 0;
                currentSec = 0
            }
            
           
        }, 1000)
    
})
</script>