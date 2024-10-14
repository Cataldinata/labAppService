const SUPABASE_URL = "https://yecpqrdcabvoulzwlqph.supabase.co";
const SUPABASE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllY3BxcmRjYWJ2b3VsendscXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMDk4MjQsImV4cCI6MjAzMjU4NTgyNH0.pQOltTGStwHwLI5LqHjFmrpyHZo5aQbgT7DQgX68_oY";
let client;

document.querySelector("#menu-open").addEventListener("click", () => {
	document.querySelector("body").setAttribute("notScroll", true);
	document.querySelector("#menu-aside").setAttribute("opened", true);
});

document.querySelector("#menu-close").addEventListener("click", () => {
	document.querySelector("body").removeAttribute("notScroll");
	document.querySelector("#menu-aside").removeAttribute("opened");
});

document
	.querySelector("gru-form")
	.addEventListener("submit", async function (event) {
		client = client ?? supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
		const { error } = await client.from("lead").insert([event.detail]);
		!error && alert("Seu lead foi enviado com sucesso!");
	});
