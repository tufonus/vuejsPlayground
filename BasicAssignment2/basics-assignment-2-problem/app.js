const app = Vue.createApp(
    {
        data() {
            return {
                paragraphInput: "OUTPUT",
                paragraphInput2: "OUTPUT",

            };

        },

        methods: {
            showAlert() {
                alert("Hello World!");

            },
            callInputEvent(event) {
                this.paragraphInput = event.target.value;
            },

            callInputEvent2(event) {
                this.paragraphInput2 = event.target.value;
            }
        }
    }
);

app.mount('#assignment');
//app.mount('#inputEventTrigger2');