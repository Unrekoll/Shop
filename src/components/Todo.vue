<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <p>{{ login }}</p>
        <div class="container">
          <message v-if="message" :message="message" />

          <newNote :note="note" @addNote="addNote" />

          <div class="note-header" style="margin: 36px 0">

            <h1>{{ title }}</h1>

            <div class="search-block">
            <search :value="search" placeholder="Find your note" @search="search = $event"/>
            
            <div class="icons">
            <svg :class="{active:!grid}" @click ="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M21,18 C21.5522847,18 22,18.4477153 22,19 C22,19.5522847 21.5522847,20 21,20 L7,20 C6.44771525,20 6,19.5522847 6,19 C6,18.4477153 6.44771525,18 7,18 L21,18 Z M21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L21,11 Z M21,4 C21.5522847,4 22,4.44771525 22,5 C22,5.55228475 21.5522847,6 21,6 L7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 L21,4 Z M2,4 L4,4 L4,6 L2,6 L2,4 Z M2,11 L4,11 L4,13 L2,13 L2,11 Z M2,18 L4,18 L4,20 L2,20 L2,18 Z"/></svg>
            <svg :class="{active:grid}" @click ="grid = true" xmlns="http://www.w3.org/2000/svg" width='24'  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </div>
            </div>
          </div>

          <notes :notes="notesFilter" :grid="grid" @remove="removeNote" />

        </div>
      </section>
    </div>
  </div>
</template>


<script>
import message from "@/components/Message.vue";
import newNote from "@/components/NewNote.vue";
import Notes from "@/components/Notes.vue";
import Search from '@/components/Search.vue';

export default {
  components: {
    message,
    newNote,
    Notes,
    Search,
  },
  data() {
    return {
      login: "Admin",
      title: "Notes App",
      search: "",
      message: null,
      grid:true,
      note: {
        title: "",
        descr: "",
      },
      notes: [
        {
          title: "First Note",
          descr: "Description for first note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Second note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Third note",
          descr: "Description for third note",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
      
    };
  },
  computed: {
    notesFilter () {
      let array = this.notes,
      search = this.search
    if (!search) return array
    search = search.trim().toLowerCase()
    array = array.filter(function (item) {
      if (item.title.toLowerCase().indexOf(search) !== -1) {
        return item
      }
    })
    return array
    }
  },
  methods: {
    addNote() {
      //console.log(this.note)
      let { title, descr } = this.note;
      if (title === "") {
        this.message = "title can`t be blank!";
        return false;
      }
      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
      });
      this.message = null;
      this.note.title = "";
      this.note.descr = "";
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>

<style>
</style>