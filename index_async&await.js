// 時間のかかる処理
const fetchMessage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("件名: フロントエンド研修について");
    }, 2000);
  });
};

console.log("メッセージを取得中...");
// TODO: fetchMessageにより返されるメッセージをコンソールに出力しよう
const main = async () => {
  console.log("メッセージを取得中...");

  const msg = await fetchMessage();

  console.log(msg);
};

main();