<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup() {
    return () => h('button', { attrs: { type: 'submit' } }, ['hi'])
  }
})
</script>
