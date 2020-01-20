const SnowFlower = require("./snowflower");

const app = document.getElementById("app");
const num = 10;
const duration = 1000;

function render(){
    setInterval(() => {
        for (let i = 0; i < num; i++) {
            new SnowFlower({
                parent: app
            }).render();
        }
    }, duration);
}
render();