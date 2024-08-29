async function publish(redis) {
  setInterval(() => {
    let work = Array.from({ length: 100 }, () => Math.floor(Math.random() * 5));

    redis.lpush("QT", ...work);
  }, 5000);
}

exports.publish = publish;
