const app = Vue.createApp(
    {
        data() {
            return {
                
                //result: "RESULTS",
                result: 0,
            };
        },
        computed:
        {
            resultText()
            {}

        },
        methods: {
            Add(value) {
                //alert("Click + 5");
                // this.num_result += value;
                // alert("TEST: " + num_result);
                this.result += value;
                console.log("Result is: " + this.result);
            },

            
        }
    }
);

app.mount('#assignment')