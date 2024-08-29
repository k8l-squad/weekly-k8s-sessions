async function publish(redis) {
  setInterval(() => {
    let work = Array.from({ length: 100 }, () => Math.floor(Math.random() * 5));
    redis.lpush("QT", ...work);
    console.log("Published 100 work units...");
  }, 5000);
}

exports.publish = publish;
