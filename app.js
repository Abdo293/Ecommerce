if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((res) => console.log("file regestered" + res))
    .catch((err) => console.log(err));
}
