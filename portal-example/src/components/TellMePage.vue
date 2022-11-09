<template>
    <div>
        <div id="editor">CK Editor 영역</div>
        <button type="button" class="btn btn-success" @click="sendTellMe">Send</button>
    </div>
</template>

<script>
// CKEditor를 cdn방식이 아닌 npm 방식으로 사용 => import
// CKEditor를 import해서 Vue와 연결
import Vue from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue2"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

Vue.use(CKEditor);

export default {
    data() {
        return {
            CKEditor: null
        }
    }, 
    methods: {
        sendTellMe() {
            let message = this.CKEditor.getData();
            alert(message);
        }
    },
    async mounted() {
        this.CKEditor = await ClassicEditor.create(document.querySelector('#editor'));
    }
}
</script>

<style>
</style>