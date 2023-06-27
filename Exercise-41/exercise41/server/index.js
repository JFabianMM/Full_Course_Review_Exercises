const Koa = require('koa');
const socketIO = require('socket.io');

const app = new Koa();
const server = app.listen(3001);
const io = socketIO(server);
console.log('Server started');

io.on("connection", (socket) => {
    console.log("Connection opened");

    let profits= [0, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
    let months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];
    
    socket.emit("newChartData", {
        profits: profits,
        months: months
    });

    setInterval(() => {
            socket.emit("newChartData", {
                profits: profits,
                months: months
            });
        }, 5000
    )
});
