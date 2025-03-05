export default async function getResult() {
  const result = await fetch(`http://10.10.0.237:9000/result`, {
    method: "GET",
  });

  const res = await result.json();
  console.log(res);
  return res;
}
