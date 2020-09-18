import app from "./app";

let main = () => {
    app.listen(process.env.PORT, () => {
        console.log('Escuchando puerto', process.env.PORT);
    });
}

main();