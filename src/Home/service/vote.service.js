export default async function vote({ selected }) {
  console.log("vote:", selected);
  return;
  const result = await fetch(`${process.env.REACT_APP_API}/vote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      result: selected,
    }),
  });

  const res = await result.json();
  console.log(res);
  return res;
}
