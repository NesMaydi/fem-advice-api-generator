const newQuoteBtn = document.querySelector("#dice-btn");

const endpoint = "https://api.adviceslip.com/advice";
const getQuote = async function () {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    document.querySelector("#id-advice").innerHTML = "advice #" + json.slip.id;
    document.querySelector("#quote").innerHTML = json.slip.advice;
  } catch (err) {
    console.log(err);
    alert("failed to fetch new quote");
  }
};

newQuoteBtn.addEventListener("click", getQuote);
