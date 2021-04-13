const btn = document.querySelector("#btn-ab");

const getCookie = (cookieName) => {
	const name = cookieName + "=";
	const cookieParts = document.cookie.split(";");
	for (let i = 0; i < cookieParts.length; i++) {
		let part = cookieParts[i];
		while (part.charAt(0) == " ") {
			part = part.substring(1);
		}
		if (part.indexOf(name) == 0) {
			return part.substring(name.length, part.length);
		}
	}
	return "";
};

const checkCookie = () => {
	const netlifyCookie = getCookie("nf_ab");
	if (netlifyCookie) {
		btn.innerHTML = "Opt-out";
	}
};

window.addEventListener("load", () => {
	checkCookie();
});

const buttonHandler = (button, callback) => {
	if (!button) return;
	button.addEventListener(
		"click",
		(event) => {
			event.preventDefault();
			callback();
		},
		false,
	);
};

buttonHandler(btn, () => {
	switch (btn.innerHTML) {
		case "Opt-in":
			btn.innerHTML = "Opt-out";

			const now = new Date();
			const expires = now.getTime() + 1000 * 3600 * 24 * 365;

			now.setTime(expires);

			document.cookie = `nf_ab=test; expires=${now.toUTCString()}`;

			location.reload();
			break;

		case "Opt-out":
			btn.innerHTML = "Opt-in";

			document.cookie = "nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";

			location.reload();
			break;
	}
});
