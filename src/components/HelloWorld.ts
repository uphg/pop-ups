import { defineComponent, h } from "vue";

const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => h('h1', [props.msg])
  }
})

export default HelloWorld