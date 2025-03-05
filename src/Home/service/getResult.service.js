export default async function getResult() {
  const result = await fetch(`http:///result`, {
    method: "GET",
  });

  const res = await result.json();
  console.log(res);
  return res;
}
