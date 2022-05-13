<template>
  <div class="notes">
    <div class="note" :class="{full: !grid}" v-for="(note, index) in notes" :key="index">
      <div class="note-header note-title" :class="{full:!grid}">
        <p>{{ note.title }}</p>
        <p style="cursor:pointer;" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required:true
    },
    grid: {
      type: Boolean,
      required:true
    }
  },
  methods: {
    removeNote (index) {
      console.log (`Note id -${index} removed`)
      this.$emit('remove',index)
    }
  }
  
}
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width:48%;
  display: flex;
  flex-direction: column;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: white;
  transition: all .25s cubic-bezier(.02,.01,.047,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
    box-shadow:0 30px 30px rgba(0,0,0,.04) ;
    transform: translate(0, -6px);
    transition-delay: 0s m !important;
  }
  &.full {
    width: 100%;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color:rgb(18, 1, 252)
  }
  svg {
    &.active {
      color:blue;
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color:#999;
  }
}
.search-block {
  display: contents;
}
@media (max-width: 500px) {
  .note-header {
    display: flex;
    flex-direction: column;
    p {
      font-size: 16px;
    }
  }
  .search-block {
    display: flex;
    align-items: center;
  }
  .note {
    height: 300px;
  }
  .note-title {
    flex-direction: row;
  }
  .feather {
    display: none;
  }
  .note {
    width: 100%;
  }
  .icons {
    display: none;
  }
}
</style>